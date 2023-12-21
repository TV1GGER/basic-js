const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 let count = 0;
 let finalStr = '';
 for( let i = 0; i <= str.length - 1; i++) {
  count++;
  if ((str[i] !== str[i + 1]) && (str[i] === str[i - 1]) && (str[i + 1])) {
    finalStr = finalStr + count + str[i];
    count = 0;
  }
  if ((str[i] !== str[i + 1]) && (!str[i - 1])) {
    finalStr = finalStr + str[i];
    count = 0;
  }
  if ((str[i] !== str[i - 1]) && (!str[i + 1])) {
    finalStr = finalStr + str[i];
    count = 0;
  }
  if ((str[i] !== str[i - 1]) && (str[i] !== str[i + 1]) && (str[i + 1]) && (str[i - 1])) {
    finalStr = finalStr + str[i];
    count = 0;
  }
  if ((str[i] === str[i - 1]) && (i + 1 === str.length)) {
    finalStr = finalStr + count + str[i];
    count = 0;
  }
  
}
return finalStr;
}

module.exports = {
  encodeLine
};
