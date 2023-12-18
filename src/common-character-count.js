const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const concatArrStr = s1.concat(s2).split('');
  const concatArrStrSet = Array.from(new Set(concatArrStr));
  let objA = {};
  let objB = {};
  let resultCount = 0;
  
function setObj(s, obj) {
  for (let i = 0; i < s.length; i++) {
    if ((concatArrStrSet.includes(s[i]))) {
      if (!obj[s[i]]) {
        obj[s[i]] = 0;
      }
        obj[s[i]]++;
    }
}
};

setObj(s1, objB);
setObj(s2, objA);

for (let word of concatArrStrSet) {
  if ((objA[word]) && (objB[word])) {
    resultCount += (Math.min(objA[word], objB[word]));
  }
}
return resultCount;
}

module.exports = {
  getCommonCharacterCount
};
