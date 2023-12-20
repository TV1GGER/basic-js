const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let nToArr = n.toString().split('-');
  let folseTrue = null;
  function if16Str(el) {
    if((folseTrue !== false) && (typeof parseInt(el, 16) === 'number')) {
    if(((parseInt(el, 16)) <= 255) && ((parseInt(el, 16)) >= 0)) {
      return folseTrue = true;
    }
    return folseTrue = false;
  }
  }
  if(nToArr.length === 6) {
    nToArr.forEach(if16Str);
  }
  if(nToArr.length !== 6) {
    folseTrue = false;
  }
  return folseTrue;
}
module.exports = {
  isMAC48Address
};
