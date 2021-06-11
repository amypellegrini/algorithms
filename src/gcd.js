/**
 * Time complexity:
 *
 *  - Worst: O(p/q)
 *  - Best: O(1)
 *
 * Space complexity: O(1)
 *
 * @param {number} p
 * @param {number} q
 * @returns
 */
function gcd(positiveInteger, quotient) {
  if (quotient === 0) return positiveInteger;
  const remainder = positiveInteger % quotient;
  return gcd(quotient, remainder);
}

module.exports = gcd;
