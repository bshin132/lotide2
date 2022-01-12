const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
 }

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

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
    // }

    // [1,2,3,4,5] / 2 = 2
    // [1,2,3,4] / 2   = 2
  }

}

console.log(middle([1, 2, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]