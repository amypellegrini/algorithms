const indexOfSmallest = require("../indexOfSmallest");

describe("indexOfSmallest", () => {
  it.each([
    [[1, 2, 3], 0],
    [[2, 3, 1], 2],
    [[2, 1, 3], 1],
    [[2, -1, 3], 1],
    [[0], 0],
  ])(
    "returns the index of the smallest number in an array of numbers",
    (array, expectedIndex) => {
      expect(indexOfSmallest(array)).toEqual(expectedIndex);
    }
  );

  it.each([
    [[1, 2, 3], 1, 1],
    [[0, 2, 3, 1], 1, 3],
    [[-1, 1, 3], 1, 1],
    [[2, -2, 3, -1], 2, 3],
    [[0], 0, 0],
  ])(
    "should search index from a starting position",
    (array, startIdx, expectedIndex) => {
      expect(indexOfSmallest(array, startIdx)).toEqual(expectedIndex);
    }
  );
});
