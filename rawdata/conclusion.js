const ret = [require("./ret"), require("./ret_1")]
const rest = {}
const count = {}
for (key in ret[0]) {
  rest[key] = [];
  if (ret[0][key]) rest[key].push.apply(rest[key], ret[0][key]);
  if (ret[1][key]) rest[key].push.apply(rest[key], ret[1][key]);
  rest[key].sort();
  rest[key] = rest[key].filter((data, index, arr) => {
    if (index === 0) return true;
    return data !== arr[index - 1];
  });
  count[key] = rest[key].length;
}
const fs = require('fs');
fs.writeFileSync("ret_all.json", JSON.stringify(rest, "", "  "));
fs.writeFileSync("count.json", JSON.stringify(count, "", "  "));