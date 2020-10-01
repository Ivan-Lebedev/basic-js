const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0
  for (item of matrix) {
    item = item.filter(cat => cat === '^^')
    counter += item.length
  }
  return counter
}