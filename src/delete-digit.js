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
  let nArray = n.toString().split('');
  let number = 0;

  nArray.forEach((_, index) => {
    const array = [...nArray];
    array.splice(index, 1);
    const newNumber = Number(array.join(''));
  
    if (newNumber > number) {
      number = newNumber;
    }
  })

  return number;
}

module.exports = {
  deleteDigit
};
