const merge = require("./merge");

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const midPoint = Math.floor(array.length / 2);

  let leftArray = array.slice(0, midPoint);
  let rightArray = array.slice(midPoint);

  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);

  return merge(leftArray, rightArray);
}

module.exports = mergeSort;
