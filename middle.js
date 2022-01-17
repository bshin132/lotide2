const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else {
    const middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      return [array[middleIndex - 1], array[middleIndex]];

    } else {
      return [array[middleIndex]]
    }
  }
}

module.exports = middle;