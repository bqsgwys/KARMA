var trend = {}
const keywords = require("./keywordExtraction").keywords;
require("./infoExtraction")().then((info) => {
  var minday = 100000000000;
  // relative date
  for (article in info) {
    info[article].day = Math.round(new Date(info[article].date) / 86400000);
    minday = Math.min(minday, info[article].day);
    maxday = Math.max(minday, info[article].day);
  }

  for (articles in info) {
    info[articles].day -= minday;
  }
  trend.maxDay = maxday - minday;
  trend.startDate = (new Date(minday * 86400000)).toLocaleDateString();

  for (keyword in keywords) {
    trend[keyword] = {};
    let keywordPapersEachDay = keywords[keyword].map(x => {
      if (!info[x]) {
        console.log(x);
        return 0;
      } else
        return info[x].day;
    });
    for (let day of keywordPapersEachDay) {
      if (!trend[keyword][day]) trend[keyword][day] = 0;
      trend[keyword][day]++;
    }
    trend[keyword].total = keywords[keyword].length;
  }
  const fs = require("fs");
  fs.writeFileSync("../result.json", JSON.stringify(trend, "", "  "));
});