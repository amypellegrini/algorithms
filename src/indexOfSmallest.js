/**
 * Time complexity:
 *
 * Where `n` represents the length of the input array, and `k` the starting
 * index:
 *
 *  - Worst: O(n)
 *  - Best: O(n - k) when k > 0
 *
 * @param {number[]} array
 * @param {number} startIdx
 * @returns {number} index of smallest number.
 */
function indexOfSmallest(array, startIdx = 0) {
  let indexOfSmallest = startIdx;

  for (let i = startIdx; i < array.length; i++) {
    if (array[i] < array[indexOfSmallest]) {
      indexOfSmallest = i;
    }
  }

  return indexOfSmallest;
}

module.exports = indexOfSmallest;
