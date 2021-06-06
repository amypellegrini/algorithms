const merge = require("../merge");

describe("merge", () => {
  it.each([
    [
      [1, 2],
      [3, 4],
      [1, 2, 3, 4],
    ],
    [
      [1, 3],
      [2, 4],
      [1, 2, 3, 4],
    ],
    [
      [1, 4],
      [2, 3],
      [1, 2, 3, 4],
    ],
    [
      [1, 5],
      [2, 3],
      [1, 2, 3, 5],
    ],
    [
      [-1, 5],
      [2, 3],
      [-1, 2, 3, 5],
    ],
    [
      [-5, 4],
      [2, 5],
      [-5, 2, 4, 5],
    ],
    [[-5], [2], [-5, 2]],
    [[2], [-5], [-5, 2]],
    [[], [-5], [-5]],
    [[2], [], [2]],
    [[0], [], [0]],
  ])(
    "merges two sorted sub arrays into a main sorted array",
    (arr1, arr2, expectedResult) => {
      expect(merge(arr1, arr2)).toEqual(expectedResult);
    }
  );
});
