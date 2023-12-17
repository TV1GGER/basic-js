const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let resultCount = 0;

    function arrCounting(arr2){
        arr2.forEach(element => {
        if(Array.isArray(element) && (element.length >= 1)){
          count++;
          arrCounting(element);
        }
      });
      }
      // if((Array.isArray(arr)) && (arr.length === 0)){
      //   return 1;
      // }
        arr.forEach(element => {
        if(Array.isArray(element)){
          if (count >= resultCount) {
            resultCount = count + 1;
            count = 1;
            arrCounting(element);
          }
          count = 1;
          arrCounting(element);
        }
      });
return resultCount + 1;
  }
}


module.exports = {
  DepthCalculator
};
