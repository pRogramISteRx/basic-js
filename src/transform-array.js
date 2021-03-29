const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
}

let newArray = [];
let count = 0;

for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next') {
      i += 1;
    } else if (arr[i] === '--discard-prev') {
      if (i !== 0 && arr[i-2] !== '--discard-next') {
        newArray.pop(arr[i-1]);
      }
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        newArray.push(arr[i+1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i !== 0 && arr[i-2] !== '--discard-next') {
        newArray.push(arr[i-1]);
      }
    } else {
        newArray.push(arr[i]);
    }
  }
  return newArray;
};
