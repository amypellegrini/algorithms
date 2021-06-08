const swap = require("./swap");

/**
 * Lomuto partition.
 *
 * @param {number[]} array
 * @param {number} low
 * @param {number} high
 */
function partition(array, low = 0, high = array.length - 1) {
  const pivot = array[high];

  let i = low;

  for (let currentIdx = low; currentIdx < high; currentIdx++) {
    if (array[currentIdx] < pivot) {
      swap(array, i, currentIdx);
      i++;
    }
  }

  swap(array, i, high);
  return i;
}

module.exports = partition;
