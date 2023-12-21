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
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  let updatedStr = str;
  let newStr;

  if (addition || addition === false || addition === null) {
    if(additionRepeatTimes) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        updatedStr = updatedStr + (i < additionRepeatTimes - 1 ? addition + (additionSeparator ? additionSeparator : '|') : addition);
      }
    } else {
      updatedStr += addition;
    }
  }
  if (repeatTimes) {
    newStr = (updatedStr + (separator ? separator : '+')).repeat(repeatTimes - 1) + updatedStr;
  } else {
    newStr = updatedStr;
  }

  return newStr;
}

module.exports = {
  repeater
};
