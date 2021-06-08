const quickSort = require("../quickSort");

describe("quickSort", () => {
  it.each([
    [
      [3, 2, 5, 0, 1],
      [0, 1, 2, 3, 5],
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
  ])("should sort numbers from least to greatest", (input, output) => {
    expect(quickSort(input)).toEqual(output);
  });

  it.each([[[6, 1, 3], 0, 1, [1, 6, 3]]])(
    "should sort numbers within a given subarray",
    (input, startIdx, endIdx, output) => {
      expect(quickSort(input, startIdx, endIdx)).toEqual(output);
    }
  );
});
