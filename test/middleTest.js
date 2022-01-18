const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns ['hello', 'lighthouse', 'labs', 'students] for ['lighthouse', 'labs']", () => {
    assert.deepEqual(middle(['hello', 'lighthouse', 'labs', 'students']), ['lighthouse', 'labs'])
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), [])
  })


});

// console.log(middle([1, 2, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]