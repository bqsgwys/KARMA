const fs = require('fs');
const path = require('path');
const suffix = ".txt";

const readtxt = (prefix) => (fileId) => {
  let filePath = path.resolve(prefix + fileId + suffix);
  return fs.readFileSync(filePath, encoding = "utf-8");
}
module.exports = readtxt;