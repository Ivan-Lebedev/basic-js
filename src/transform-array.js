const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const arr2 = []
  if (!Array.isArray(arr)) throw new Error()

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev'
      && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
      arr2.push(arr[i])
    }
    if (arr[i] === '--discard-next'
      && arr[i + 1] !== undefined) {
      i++
    }
    if (arr[i] === '--discard-prev'
      && arr[i - 1] !== undefined
      && arr[i - 2] !== "--discard-next") {
      arr2.pop(arr[i - 1])
    }
    if (arr[i] === '--double-next'
      && arr[i + 1] !== undefined) {
      arr2.push(arr[i + 1])
    }
    if (arr[i] === '--double-prev'
      && arr[i - 1] !== undefined
      && arr[i - 2] !== "--discard-next") {
      arr2.push(arr[i - 1])
    }
  }
  return arr2
}