const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(y) {
  const x = Number(y);
  if((y) && (typeof x === 'number') && (typeof y === 'string') && (x > 0) && (x < MODERN_ACTIVITY)) {
  const k = 0.693/HALF_LIFE_PERIOD;
  const n = MODERN_ACTIVITY/x;
  let resultAge = 0;
  resultAge = Math.ceil(Math.log(n)/k);
  return resultAge;
  } else {
  return false;
  }
  return false;
  
}

module.exports = {
  dateSample
};
