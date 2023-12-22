const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 let str = '';
 let count = 0;
 let numStr = n.toString();

 for (let i = 0; i < numStr.length; i++) {
if ((Number(numStr[i]) > Number(numStr[i + 1])) || ((str.length === numStr.length- 2) && (i === numStr.length - 1))) {
  str = str + numStr[i];
}
if (Number(numStr[i]) === Number(numStr[i + 1])) {
  str = str + numStr[i];
}
 }
 return Number(str);

}

module.exports = {
  deleteDigit
};
