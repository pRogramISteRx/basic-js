const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthOfArray = 0;
    if (Array.isArray(arr)) {
        for (let element of arr)
            if (Array.isArray(element)){
                depthOfArray = Math.max(depthOfArray, this.calculateDepth(element));
            }
        return ++depthOfArray;
    }
    return depthOfArray;
  }
};