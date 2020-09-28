const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let backyards = matrix.reduce((acc, element) => acc.concat(element), []);
  let numberOfCats = backyards.reduce(
    (acc, element) => acc + (element === "^^" ? 1 : 0),
    0
  );
  return numberOfCats;
  // remove line with error and write your code here
};
