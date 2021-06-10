function binarySearch(array, target, min = 0, max = array.length - 1) {
  if (max < min) {
    return null;
  }

  const guessIdx = Math.floor((min + max) / 2);
  const guess = array[guessIdx];

  if (guess === target) {
    return target;
  }

  if (guess < target) {
    return binarySearch(array, target, guessIdx + 1, max);
  }

  if (guess > target) {
    return binarySearch(array, target, min, guessIdx - 1);
  }
}

module.exports = binarySearch;
