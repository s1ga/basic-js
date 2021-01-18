const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2**disksNumber - 1

  return {
    turns,
    seconds: Math.floor((3600 / turnsSpeed) * turns)
  }
};
