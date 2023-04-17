const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  let newArr = [];
  let finalArr = [];
  if(typeof(members) !== 'object' || members === null){
    return false;
  }else{
  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) === 'string'){
    newArr.push(members[i].trim());
    }
  }
  for(let z = 0; z < newArr.length; z++){
      finalArr.push(newArr[z][0].toUpperCase());
    }
    return finalArr.sort().join('');
  }
}

module.exports = {
  createDreamTeam
};
