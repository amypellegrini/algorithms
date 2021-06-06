const swap = require("../swap");

describe("swap", () => {
  it("swaps values in an array at given indexes", () => {
    const startArray = [1, 0];
    const resultingArray = [0, 1];

    swap(startArray, 0, 1);

    expect(startArray).toEqual(resultingArray);
  });
});
