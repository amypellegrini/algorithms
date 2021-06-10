function merge(arr1, arr2) {
  const sorted = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (sorted.length < arr1.length + arr2.length) {
    const value1 = arr1[arr1Pointer];
    const value2 = arr2[arr2Pointer];

    if (value1 === undefined || value2 === undefined) {
      if (value1 === undefined) {
        sorted.push(value2);
        arr2Pointer++;
      }

      if (value2 === undefined) {
        sorted.push(value1);
        arr1Pointer++;
      }
    } else {
      if (value1 < value2) {
        sorted.push(value1);
        arr1Pointer++;
      } else {
        sorted.push(value2);
        arr2Pointer++;
      }
    }
  }

  return sorted;
}

module.exports = merge;
