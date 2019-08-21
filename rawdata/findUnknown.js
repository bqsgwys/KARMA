const articles = require("./articles")
const info = require("./info_all")

const unknownArticles = articles.filter(data =>
  !(info[data]))

const fs = require('fs');
fs.writeFileSync("unknownArticles.json", JSON.stringify(unknownArticles, "", "  "));