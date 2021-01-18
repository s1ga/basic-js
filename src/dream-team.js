const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  const dreamTeam = []

  members.forEach(name => {
    if (typeof name === 'string') {
      name = name.trim()
      dreamTeam.push(name[0].toUpperCase())
    }
  })

  return dreamTeam.sort().join('')
};

