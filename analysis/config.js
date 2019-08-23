const infoPrefix = "../rawinfo/"
module.exports = {
  dataList: [
    "../../data/",
    "../../txt_all_pypdf/"
  ],
  infoList: ["info0", "info1", "info2"].map(x => infoPrefix + x)
}