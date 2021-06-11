const selectionSort = require("../selectionSort");

describe("selectionSort", () => {
  it.each([
    [
      [6, 8, 4, 7, 2, 0, 1],
      [0, 1, 2, 4, 6, 7, 8],
    ],
    [
      [22, 11, 99, 88, 9, 7, 42],
      [7, 9, 11, 22, 42, 88, 99],
    ],
  ])("sorts an array of numbers from least to greatest", (unsorted, sorted) => {
    expect(selectionSort(unsorted)).toEqual(sorted);
  });
});
