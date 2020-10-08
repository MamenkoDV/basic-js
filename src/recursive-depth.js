const CustomError = require("../extensions/custom-error");

let result = [];
class DepthCalculator {
  // constructor() {

  //   this.calculateDepth = this.calculateDepth.bind(this); // (*)
  // }

  calculateDepth(arr, levelOfDepth = 1, max = []) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        this.calculateDepth(element, levelOfDepth + 1, max);
      }
    });

    max.push(levelOfDepth);

    return Math.max.apply(null, max);
  }
}
module.exports = DepthCalculator;
