const mergeSort = require("../mergeSort");

describe("mergeSort", () => {
  it.each([
    [
      [3, 2, 0, 1],
      [0, 1, 2, 3],
    ],
    [
      [2, 0, 1],
      [0, 1, 2],
    ],
    [
      [1, -1],
      [-1, 1],
    ],
    [
      [1, 2, -1],
      [-1, 1, 2],
    ],
    [
      [-3, 2, 5, 0, 1],
      [-3, 0, 1, 2, 5],
    ],
    [
      [-3, 2, 5, 0, -1],
      [-3, -1, 0, 2, 5],
    ],
    [
      [0, 1, 2, 3, 5],
      [0, 1, 2, 3, 5],
    ],
    [
      [5, 3, 2, 1, 0],
      [0, 1, 2, 3, 5],
    ],
    [
      [5, 3, 2, 1, 0, 100, 98],
      [0, 1, 2, 3, 5, 98, 100],
    ],
  ])("should sort numbers from least to greatest", (input, output) => {
    expect(mergeSort(input)).toEqual(output);
  });
});
