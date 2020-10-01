const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  return (
    typeof (sampleActivity) === 'string'
    && !isNaN(parseFloat(sampleActivity))
    && parseFloat(sampleActivity) <= 15
    && parseFloat(sampleActivity) > 0
  )
    ? Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (Math.log(2) / HALF_LIFE_PERIOD))
    : false
}
