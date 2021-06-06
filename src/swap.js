function swap(array, idx1, idx2) {
  const tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
}

module.exports = swap;
