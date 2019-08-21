const prefix = './data/';

const files = require("./filestats")(prefix);
const dictionary = require("./dict");
const readFile = require("./readfile");
const cleaner = require("./datacleaner");
const fs = require('fs');

const cleanedDict = dictionary.map(cleaner).map(x => new RegExp(x));
console.log("1%");
const data = files.map(readFile(prefix)).map(cleaner);
console.log("10%");
var ret = {};
var perc = 0;
var unused = [];
for (articleIndex in data) {
  let used = false;
  const str = data[articleIndex];
  for (keywordIndex in cleanedDict) {
    if (cleanedDict[keywordIndex].test(str)) {
      used = true;
      if (!ret[dictionary[keywordIndex]]) ret[dictionary[keywordIndex]] = [];
      ret[dictionary[keywordIndex]].push(files[articleIndex])
    }
  }
  if (!used) unused.push(files[articleIndex]);
  perc = articleIndex / data.length * 0.85 + 0.1;
  if (articleIndex % 100 == 0) console.log(perc * 100 + "%");
}
fs.writeFileSync("ret.json", JSON.stringify(ret, "", "  "));
console.log(99 + "%");
fs.writeFileSync("unused.json", JSON.stringify(unused, "", "  "));