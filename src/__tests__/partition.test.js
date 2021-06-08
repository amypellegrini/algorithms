const partition = require("../partition");

describe("partition", () => {
  it.each([
    [[9, 1, 5], [1, 5, 9], 1],
    [[2, 9, 1, 5], [2, 1, 5, 9], 2],
    [[2, -5, 9, 1, 5], [2, -5, 1, 5, 9], 3],
    [[5, -10], [-10, 5], 0],
    [[5, 2, -10], [-10, 2, 5], 0],
  ])(
    "sorts numbers in array in relation to rightmost pivot and returns final index",
    (input, expectedResult, finalIndex) => {
      const indexOfPivot = partition(input);

      expect(input).toEqual(expectedResult);
      expect(indexOfPivot).toEqual(finalIndex);
    }
  );
});
