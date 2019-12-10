const assert  = require('assert');

//assert.equal(1, '1');

//assert.strictEqual(1, '1');

//assert.strictEqual([1,2,3], [1,2,3])

const firstArray = [1, 2, 3];
const secondArray = firstArray;

assert.strictEqual(firstArray, secondArray);
//we should always use deep equal on asserting if two arrays are the same
assert.deepEqual([1,2,3], [1,2,3]);

assert.deepStrictEqual([1,2,3], [1,2,'3'])
