const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity) return false;
  if (+sampleActivity <= 0 || +sampleActivity >= 9000) return false;
  if (typeof sampleActivity !== "string") return false;
  let elapsedTime = MODERN_ACTIVITY / sampleActivity;
  let constantRateReaction = Math.LN2 / HALF_LIFE_PERIOD;
  let timeOfDeath = Math.log(elapsedTime) / constantRateReaction;
  if (isNaN(timeOfDeath) || timeOfDeath <= 0) return false;
  return Math.ceil(timeOfDeath);
  // remove line with error and write your code here
};
