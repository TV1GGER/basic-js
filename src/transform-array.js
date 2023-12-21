const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let finalArr = [];
  const arr2 = arr;
  if (!(arr instanceof Array)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === '--double-next') {
      finalArr.push(arr2[i + 1]);
    }
    if ((arr2[i] === '--discard-prev') || (arr2[i - 1] === '--discard-prev') || (arr2[i - 1] === '--double-prev')) {
      finalArr.pop();
    }
    if (((arr2[i] === '--discard-prev') && (arr2.indexOf(arr2[i]) === 0)) || (((arr2[i] === '--double-next') || (arr2[i] === '--double-prev')) && (arr2.length <= 3))) {
      
    }
    if ((arr2[i - 1] === '--discard-next') && (arr2[i + 1] === '--double-prev')) {
      finalArr.pop();
    }
    if ((arr2[i] === '--discard-next') && (arr2[i + 2] === '--double-prev')) {

    }
    if ((arr2[i] === '--double-prev') && (arr2[i - 2] === '--discard-next')) {
      finalArr.pop();
    }
    if ((arr2[i] === '--double-next') && (i === arr2.length)){

    }
    finalArr.push(arr2[i]);
  
  
}
return finalArr;
}

module.exports = {
  transform
};
