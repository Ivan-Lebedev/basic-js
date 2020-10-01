const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = "+",
  addition,
  additionRepeatTimes = 1,
  additionSeparator = "|"
} = {}) {  
  let resultArr = []
  const additionArr = []

  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(str)
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    (addition === null)
    ? addition = String(addition)
    : null

    additionArr.push(addition)
  }  

  const additionText = additionArr.join(`${additionSeparator}`)

  resultArr = resultArr.map(element => element = element + additionText)

  return resultArr.join(`${separator}`)
}