const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members.filter(name => typeof (name) === 'string')
      .map(name => name.trim().toLowerCase().match(/^[a-z]/).join(''))
      .sort().join('').toUpperCase()
    : false
}