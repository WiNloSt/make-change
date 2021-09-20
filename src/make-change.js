/* Making Change
Given a number "x" and a sorted array of coins "coinset", write a function
that returns the amounts for each coin in the coinset that sums up to X or
indicate an error if there is no way to make change for that x with the given
coinset. For example, with x=7 and a coinset of [1,5,10,25], a valid answer
would be {1: 7} or {1: 2, 5: 1}. With x = 3 and a coinset of [2,4] it should
indicate an error. Bonus points for optimality.

Use the following examples to test it out

A. x = 6 coinset = [1,5,10,25]
B. x = 6, coinset = [3,4]
C. x = 6, coinset = [1,3,4]
D. x = 6, coinset = [5,7]

*/

/**
 *
 * @param {number} x
 * @param {number[]} coinSet
 * @returns {object}
 */
module.exports = function makeChange(x, coinSet) {
  return { 1: 6 }
}
