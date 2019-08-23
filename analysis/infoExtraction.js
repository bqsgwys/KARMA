var results = {}

module.exports = async () => {
  return new Promise((res, rej) => {
    try {
      results = require("./cache/info");
      res(results);
    } catch (e) {
      const articles = require("./keywordExtraction").articles;
      const infoConfig = require("./config").infoList;

      const inforaw = infoConfig.map(x => require(x));
      const info = {};
      for (data of inforaw) {
        if (data.success_flag)
          info[data.id] = {
            category: data.category,
            date: data.date
          }
      }
      const superagent = require('superagent');
      results = info;
      const unknownArticles = articles.filter(data =>
        !(info[data]));
      const funcs = unknownArticles.map(async (item) => {
        // 等待异步操作完成，返回执行结果
        let x = (await superagent.get("https://arxiv.org/abs/" + item)).text;
        results[item] = {
          date: x.match(/\d+ (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec) \d+/)[0],
          category: x.match(/primary-subject">.+\((.+)\)<\/span>/)[1]
        }
        console.log("Info Fetching:", (results.length - info.length) + "/" + unknownArticles.length)
        return;
      })
      Promise.all(funcs).then(() => {
        const fs = require("fs");
        const path = require("path");
        fs.writeFileSync(path.join(__dirname, "./cache/info.json"), JSON.stringify(results, "", "  "));
        res(results);
      });
    }
  })
}

module.exports().then(() => {
  console.log("Info Fetching Done");
})