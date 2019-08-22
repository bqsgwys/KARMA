const articles = require("./articles")
const info = require("./info_known")
const superagent = require('superagent');
var results = {};
Promise.all(articles.filter(data =>
  !(info[data])).map(async (item) => {
  // 等待异步操作完成，返回执行结果
  let x = (await superagent.get("https://arxiv.org/abs/" + item)).text;
  results[item] = {
    date: x.match(/\d+ (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec) \d+/)[0],
    category: x.match(/primary-subject">.+\((.+)\)<\/span>/)[1]
  }
  console.log(Object.keys(results).length);
}));

const fs = require('fs');
fs.writeFileSync("info.json", JSON.stringify(results, "", "  "));