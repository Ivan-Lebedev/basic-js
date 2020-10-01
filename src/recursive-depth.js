const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth = (arr) => {
    let depthCounter = 0
    for (let element of arr) {
      depthCounter = Array.isArray(element)
        ? Math.max(this.calculateDepth(element), depthCounter)
        : depthCounter
    }
    return ++depthCounter
  }
}