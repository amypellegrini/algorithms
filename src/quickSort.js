const partition = require("./partition");

function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    const pivotIdx = partition(array);
    quickSort(array, low, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, high);
  }

  return array;
}

module.exports = quickSort;
