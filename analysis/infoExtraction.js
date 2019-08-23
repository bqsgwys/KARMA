var results = {}

module.exports = () => {
  return new Promise(async (res) => {
    try {
      results = require("./cache/info");
      res(results);
    } catch (e) {
      const articles = require("./keywordExtraction").articles;
      const infoConfig = require("./config").infoList;
      let info = [];
      const infoarr = infoConfig.map(x => require(x));
      for (let inforaw of infoarr)
        for (let data of inforaw) {
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
      for await (item of unknownArticles) {
        let x = (await superagent.get("https://arxiv.org/abs/" + item)).text;
        results[item] = {
          date: x.match(/\d+ (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec) \d+/)[0],
          category: x.match(/primary-subject">.+\((.+)\)<\/span>/)[1]
        }
        console.log("Info Fetched:", (Object.keys(results).length - Object.keys(info).length) + "/" + unknownArticles.length)
      }
      const fs = require("fs");
      const path = require("path");
      fs.writeFileSync(path.join(__dirname, "./cache/info.json"), JSON.stringify(results, "", "  "));
      res(results);
    }
  })
}



module.exports().then(() => {
  console.log("Info Fetching Done");
})