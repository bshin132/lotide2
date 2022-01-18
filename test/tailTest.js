const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), [])
  })

  it("returns ['lighthouse', 'lab', 'students'] for ['Hello', 'lighthouse', 'lab', 'students']", () => {
    assert.deepEqual(tail(['Hello', 'lighthouse', 'lab', 'students']), ['lighthouse', 'lab', 'students'])
  })
});


