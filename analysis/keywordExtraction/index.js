const path = require("path")
const fs = require("fs");

const prefix = require("../config").dataList.map(x => path.join(__dirname, x));

const files = prefix.map(x => require("./filestats")(x));
const dictionary = require("./dict");
const readFile = require("./readfile");
const cleaner = require("./datacleaner");

var articles = [];
var unusedarr = [];
var ret = {};

try {
  articles = require("../cache/articles")
  unusedarr = require("../cache/unused")
  ret = require("../cache/keywords")
  console.log("Keyword Extraction: Done");
} catch (e) {

  articles = [];
  unusedarr = [];
  ret = {};

  for (let dirFile of files) {
    articles = articles.concat(dirFile)
  }
  articles = articles.sort().filter((x, index, arr) => x != arr[index - 1]);
  var unused = {}
  for (article of articles) {
    unused[article] = true;
  }
  const cleanedDict = dictionary.map(cleaner).map(x => new RegExp(x));

  console.log("Keyword Extraction:", "1%");
  const data = files.map((a, index) => {
    return a.map(readFile(prefix[index])).map(cleaner)
  })
  var todoCount = 0;
  var doneCount = 0;
  for (let database of data)
    todoCount += database.length;
  console.log("Keyword Extraction:", "10%");
  for (let databaseIndex in data) {
    for (let articleIndex in data[databaseIndex]) {
      const str = data[databaseIndex][articleIndex];
      for (keywordIndex in cleanedDict) {
        if (cleanedDict[keywordIndex].test(str)) {
          unused[data[databaseIndex][articleIndex]] = false;
          if (!ret[dictionary[keywordIndex]]) ret[dictionary[keywordIndex]] = [];
          if (ret[dictionary[keywordIndex]].indexOf(files[databaseIndex][articleIndex]) == -1)
            ret[dictionary[keywordIndex]].push(files[databaseIndex][articleIndex]);
        }
      }
      doneCount++;
      let perc = Math.round(doneCount / todoCount * 10000);
      if (perc % 50 == 0) console.log("Keyword Extraction:", Math.round(perc * 0.9 + 1000) / 100 + "%");
    }
  }
  for (let doc in unused) {
    if (unused[doc]) unusedarr.push[doc];
  }
  fs.writeFileSync(path.join(__dirname, "../cache/articles.json"), JSON.stringify(articles, "", "  "));
  fs.writeFileSync(path.join(__dirname, "../cache/unused.json"), JSON.stringify(unusedarr, "", "  "));
  fs.writeFileSync(path.join(__dirname, "../cache/keywords.json"), JSON.stringify(ret, "", "  "));
  console.log("Keyword Extraction: Done");
}

module.exports = {
  articles: articles,
  keywords: ret,
  unused: unusedarr
}