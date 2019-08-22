const reg = [/\W/g, /_/g]

const cleaner = data => data.replace(reg[0], "").replace(reg[1], "").toLowerCase();
module.exports = cleaner;