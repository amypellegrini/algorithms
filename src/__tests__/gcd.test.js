const gcd = require("../gcd");

describe("Euclid's Algorithm / greatest common divisor", () => {
  it.each([
    [56, 28, 28],
    [12, 0, 12],
    [18, 4, 2],
    [15, 10, 5],
    [10, 3, 1],
    [3, 1, 1],
  ])(
    "for integer %s and quotient %s it returns the greatest common divisor: %s",
    (p, q, expectedResult) => {
      expect(gcd(p, q)).toEqual(expectedResult);
    }
  );
});
