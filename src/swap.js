/**
 * In-place array swap.
 *
 * Time complexity: O(1)
 * Space complexity: O(1)
 *
 * @param {number[]} array
 * @param {number} idx1
 * @param {number} idx2
 */
function swap(array, idx1, idx2) {
  const tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
}

module.exports = swap;
