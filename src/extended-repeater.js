const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/*str, options*/) {
  throw new CustomError("Not implemented");
  // remove line with error and write your code here
  //   function repeater (str = str.toString(),options = {}) {
  //     if(!str) return false;
  //              let  {
  // repeatTimes = 0,
  // separator = '+'.toString(),
  // addition = ''.toString(),
  // additionRepeatTimes = 0,
  // additionSeparator ='|'.toString(),
  // } = options;
  //     let result =[];
  //     result.push(str);
  //     result.push(addition);
  //     return result;
  //  result.push(str+(
  //   (addition+additionSeparator).repeat(additionRepeatTimes)
  //   ));
  // return (result.join(separator).repeat(repeatTimes)).slice(0,(-(additionSeparator.length)));
};
