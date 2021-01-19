const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error()
  } 

  function action(type, idx, array) {
    switch(type) {
      case '--discard-next':
        array[idx + 1] = null
        array[idx] = null
        return array
      case '--discard-prev': 
        array[idx - 1] = null
        array[idx] = null
        return array
      case '--double-next':
        idx < array.length - 1 ? array[idx] = array[idx + 1] : array[idx] = null
        return array
      case '--double-prev':
        idx >= 1 && idx <= array.length - 1 ? array[idx] = array[idx - 1] : array[idx] = null
        return array
    }
  }

  const actions = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  let newArr = arr
  arr.forEach((value, idx) => {
    if (actions.includes(value)) {
      newArr = action(value, idx, [...newArr])
    }
  })

  return newArr.filter(value => value !== null)
};
