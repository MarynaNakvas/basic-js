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
  if (!Array.isArray(arr)) {
    throw new TypeError("'arr' parameter must be an instance of the Array!");
  } else if (!arr.length) {
    return arr;
  } else {
    let discardNext = false;

    const newArray = arr.reduce((acc, item, index) => {
      if (discardNext) {
        discardNext = false;
      } else if (item === '--double-next' && index < arr.length - 1) {
        acc.push(arr[index + 1]);
      } else if (item === '--double-prev' && index > 0 && arr[index - 2] !== '--discard-next') {
        acc.push(arr[index - 1]);
      } else if (item === '--discard-prev' && arr[index - 2] !== '--discard-next') {
        acc.pop();
      } else if (item === '--discard-next') {
        discardNext = true;
      } else if (item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-prev' && item !== '--double-next') {
        acc.push(item);
      }
      return acc;
    }, []);

    return newArray;
  }
}

module.exports = {
  transform
};
