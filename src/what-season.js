const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const month = new Date(date).getMonth()
  if (date === undefined) return 'Unable to determine the time of year!'
  if (!Object.prototype.toString.call(date).match(['object Date'])) throw new Error()
  else {
    if (month >= 0 && month <= 1 || month === 11) return 'winter'
    if (month > 1 && month <= 4) return 'spring'
    if (month > 4 && month <= 7) return 'summer'
    if (month > 7 && month <= 10) return 'fall'
  }
}