const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  } 
    
  try {
    date.toJSON()
  } catch (e) {
    throw new Error(e)
  }

  const month = date.getMonth() + 1
  let season
  if (month === 12 || month >= 1 && month <= 2) {
    season = 'winter'
  } else if (month >= 3 && month <= 5) {
    season = 'spring'
  } else if (month >= 6 && month <= 8) {
    season = 'summer' 
  } else if (month >= 9 && month <= 11) {
    season = 'autumn'
  }

  return season
};



