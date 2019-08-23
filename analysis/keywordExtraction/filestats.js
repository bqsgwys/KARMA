const reg = /.*(190\d\.\d+)\.txt/
const fs = require('fs');
const path = require('path');
// search txt
const displayFile = (param) => {
  let files = [];
  param = path.resolve(param);
  stats = fs.statSync(param);
  if (stats.isDirectory()) {
    file = fs.readdirSync(param)
    file.forEach((e) => {
      var absolutePath = path.resolve(path.join(param, e));
      files = files.concat(displayFile(absolutePath));
    })
  } else {
    let ex = reg.exec(param);
    if (ex) files.push(ex[1]);
  }
  return files;
}

module.exports = displayFile;