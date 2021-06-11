const indexOfSmallest = require("./indexOfSmallest");
const swap = require("./swap");

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const smallestIdx = indexOfSmallest(array, i);

    if (array[i] > array[smallestIdx]) {
      swap(array, i, smallestIdx);
    }
  }

  return array;
}

module.exports = selectionSort;
