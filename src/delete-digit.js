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
  // алгоритм: 
  // сравнить первое значение с последующм, если оно меньше, то удалить.
  // иначе удалить последнее значение.
  let arr = n.toString().split('').map(el => +el);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i+1]) {
      arr.splice(i, 1);
      return +arr.join("");
    } else if (i === arr.length - 1) {
      arr.pop();
      return +arr.join("");
    }
  }

}

module.exports = {
  deleteDigit
};
