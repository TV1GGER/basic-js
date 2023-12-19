const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  function filterArr(p) {
    if (p !== -1) {
      return p;
    }
  };

  const arrFiltered = arr.filter(filterArr);
  const arrSorted = arrFiltered.sort(function(a, b){return a-b});
  const arrCopy = arr.slice();
  for (let keys in arrCopy) {
    if (arrCopy[keys] !== -1) {
      arrCopy[keys] = arrSorted.shift();
    }
  }
  return arrCopy;
}

module.exports = {
  sortByHeight
};
