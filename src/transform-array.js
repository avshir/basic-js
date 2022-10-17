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
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else if (arr.length === 0) {
    return [];
  }

  let newArr = [...arr];
  let transfArr = [];

  for(let i = 0; i < newArr.length; i++) {
    transfArr.push(newArr[i]);
    if (newArr[i] === "--double-next") {
      transfArr.pop();
      if (newArr[i + 1]) {
        transfArr.push(newArr[i + 1]);
      }
    } else if (newArr[i] === "--double-prev") {
      transfArr.pop();
        if (i > 0 && newArr[i - 1] === transfArr[i - 1]) {
          transfArr.push(newArr[i - 1]);
        }
    } else if (newArr[i] === "--discard-next") {
      transfArr.pop();
      newArr.splice(i + 1, 1); //удалит элемент i+1 из основного arr!
    } else if (newArr[i] === "--discard-prev") {
      transfArr.pop();
        if (i > 0 && (newArr[i - 1] === transfArr[i - 1])) {
          transfArr.pop();
        }
    }
  }

  return transfArr;
}

module.exports = {
  transform
};
