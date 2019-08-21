const info = require("./info0").concat(require("./info1")).concat(require("./info2"))

const info_json = {};
for (data of info) {
  if (data.success_flag)
    info_json[data.id] = {
      category: data.category,
      date: data.date
    }
}
const fs = require('fs');
fs.writeFileSync("info.json", JSON.stringify(info_json, "", "  "));