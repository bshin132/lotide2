const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  let report;
  if (eqObjects(actual, expected)) {
    report = `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    report = `❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(report);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd,dc));
console.log(assertObjectsEqual(cd,cd2));

module.exports = assertObjectsEqual;