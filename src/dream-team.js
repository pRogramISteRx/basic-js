const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let array = [];
  
  if (!members) {
    return false;
  } else {
    for (let i = 0; i < members.length; i += 1) {
      if (typeof members[i] === 'string') {
        members[i] = members[i].trim();
        array.push(members[i][0].toUpperCase());
      }
    }
    return array.sort().join('');
  }
};
