const path = require("path");
const rootDir = path.join(__dirname, "..");
/****************/
/*Configure Here*/
/****************/

const infoPrefix = "./rawdata/info/"; //directory of info files
const infoFilename = [
  "info",
]; //name of info files
const dataPrefix = [
  "./rawdata/text/",
] //name of info files

module.exports = {
  dataList: dataPrefix.map(x => path.join(rootDir, x)),
  infoList: infoFilename.map(x => path.join(rootDir, infoPrefix, x))
}