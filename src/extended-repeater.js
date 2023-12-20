const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatSubStr = '';
let repeatSubCount = 1;
const repStr = str;
let repTime = options.repeatTimes;
if (!options.repeatTimes) {
  repTime = 1;
}
let repSep = '+';
let repAdd = '';
let addRepTime = null;
let addRepSep = '';
if (options.separator) {
  repSep = options.separator;
}
if (options.addition) {
  repAdd = options.addition;
}
if (options.additionRepeatTimes) {
  addRepTime = options.additionRepeatTimes;
}
if (options.additionSeparator) {
  addRepSep = options.additionSeparator;
}
/////////
  function repeatSub(repStr, repTime, repSep, repAdd, addRepTime, addRepSep) {
    if((repeatSubCount === 1) && (repeatSubCount !== repTime)) {
      repeatSubStr = repeatSubStr + repStr;
      repeatSubCount += 1;
    }
    if((repeatSubCount === 1) && (repeatSubCount === repTime) && (addRepTime === null)) {
      repeatSubStr = repeatSubStr + repStr + (repAdd).repeat(1);
      repeatSubCount += 1;
    }
    if((repeatSubCount === 1) && (repeatSubCount === repTime) && (addRepTime !== null)) {
      repeatSubStr = repeatSubStr + repStr + (repAdd + addRepSep).repeat(addRepTime);
      repeatSubCount += 1;
    }
    if ((repSep !== null) && (repeatSubCount > 2) && (repeatSubCount < repTime)){
    repeatSubStr = repeatSubStr + (repAdd + addRepSep).repeat(addRepTime) + repSep + repStr;
    repeatSubCount += 1;
    }
    if((repeatSubCount < repTime) && (repTime !== 1)) {
      repeatSubStr = repeatSubStr + (repAdd + addRepSep).repeat(addRepTime) + repSep + repStr;
      repeatSubCount += 1;
      repeatSub(repStr, repTime, repSep, repAdd, addRepTime, addRepSep);
  }
  if((repSep !== null) && (repeatSubCount > 2) && (repeatSubCount === repTime)) {
    repeatSubStr = repeatSubStr + repAdd + repSep + repStr + (repAdd + addRepSep).repeat(addRepTime);
    repeatSubCount += 1;
}
}
repeatSub(repStr, repTime, repSep, repAdd, addRepTime, addRepSep);

return repeatSubStr;
}

module.exports = {
  repeater
};
