const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  return members
    .filter((element) => typeof element === "string")
    .map((element) => element.trim())
    .filter((element) => Boolean(element))
    .map((element) => element[0].toUpperCase())
    .sort()
    .join("");
  // remove line with error and write your code here
};
