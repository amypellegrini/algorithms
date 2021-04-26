const gcd = require('../gcd');

describe("Euclid's Algorithm / greatest common divisor", () => {
  it.each([
    [12, 0, 12],
    [18, 4, 2],
    [15, 10, 5],
  ])(
    "for integers %s and %s it returns the greatest common divisor %s",
    (p, q, expectedResult) => {
      expect(gcd(p, q)).toEqual(expectedResult);
    }
  );
});
