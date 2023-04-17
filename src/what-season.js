const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let string = date.toISOString();
let arr = [];
let num = 0;
if((date !== null) && (date)){
  num = string[5]+string[6];
  let str = num.toString();
  if((str === '12') || (str === '01') || (str === '02')){
    return 'winter';
  }
  if((str === '03') || (str === '04') || (str === '05')){
    return 'spring';
  }
  if((str === '06') || (str === '07') || (str === '08')){
    return 'summer';
  }
  if((str === '09') || (str === '10') || (str === '11')){
    return 'autumn';
  }
}else{return 'Invalid date!';}
if(date === 'undefined'){
  return 'Unable to determine the time of year!';
}


}
 
module.exports = {
  getSeason
};
