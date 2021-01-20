const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str)
  options.addition = String(options.addition) !== 'undefined' ? String(options.addition) : ''
  options.separator = options.separator ? options.separator : '+'
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  
  let newStr = ''
  let addition = ''
  if (options.additionRepeatTimes) {
   for (let i = 1; i < options.additionRepeatTimes; i++) {
    addition += options.addition + options.additionSeparator
   } 
  } 
  addition += options.addition

  if (options.repeatTimes) {
    for (let i = 1; i <= options.repeatTimes; i++) {
      newStr += str + addition
      if (!(i === options.repeatTimes)) {
        newStr += options.separator
      }
    } 
  } else {
    newStr = str + addition
  }

  return newStr
}

