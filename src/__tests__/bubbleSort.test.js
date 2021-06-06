const bubbleSort = require("../bubbleSort");

describe("bubbleSort", () => {
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
  ])("should sort numbers from lowest to greatest", (input, output) => {
    expect(bubbleSort(input)).toEqual(output);
  });
});
