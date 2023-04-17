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
    function arrCounting(arr2){
      for(let key in arr2){
        if(typeof(arr2[key]) === 'object'){
          count++;
          arrCounting(arr2[key]);
        }
      }
      }
      if(typeof(arr) === 'object'){
        count++;
      }
      for(let i = 0; i < arr.length; i++){
        if((typeof(arr[i]) === 'object')){
          count++;
          arrCounting(arr[i]);
        }
        return count;
      }
  }
}


module.exports = {
  DepthCalculator
};
