const binarySearch = require("../binarySearch");

describe("binarySearch", () => {
  it.each([
    [[1], 1],
    [[1, 3, 5], 5],
    [[1, 3, 5], 1],
    [[-1, 1, 3, 5], 1],
    [[-1, 1, 3, 5], -1],
    [[-1, 1, 3, 5], 5],
  ])(
    "returns a target number from an array of sorted numbers",
    (array, target) => {
      expect(binarySearch(array, target)).toEqual(target);
    }
  );

  it.each([
    [[1], 2],
    [[1, 3, 5], 4],
    [[1, 3, 5], -1],
    [[-1, 1, 3, 5], 6],
    [[-1, 1, 3, 5], 2],
    [[-1, 1, 3, 5], 0],
  ])("returns null if target is not found", (array, target) => {
    expect(binarySearch(array, target)).toBeNull();
  });
});
