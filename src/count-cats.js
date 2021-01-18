const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const catSign = '^^'
  let cats = 0

  backyard.forEach(yard => yard.forEach(item => item === catSign ? cats++ : null))

  return cats
};
