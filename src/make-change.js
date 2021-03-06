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
 * @typedef {{[key: number]: number}} Solution
 */

const NO_SOLUTION = null

/**
 *
 * @param {number} x
 * @param {number[]} coinSet
 * @param {{[x: number]: Solution} | {}} solutionCache to avoid computing the same solution more than once
 * @returns {Solution | null} null indicate no possible solutions
 */
module.exports = function makeChange(x, coinSet, solutionCache = {}) {
  if (x === 0) {
    return {}
  }

  const candidateCoinSet = coinSet.filter((coin) => coin <= x)
  for (let coin of candidateCoinSet.reverse()) {
    const nextX = x - coin

    if (!solutionCache[x]) {
      solutionCache[x] = makeChange(nextX, candidateCoinSet, solutionCache)
    }

    const subSolution = solutionCache[x]

    if (subSolution) {
      return combineSolution(subSolution, coin)
    }
  }

  return NO_SOLUTION
}

/**
 *
 * @param {Solution} solution
 * @param {number} coin
 * @returns {Solution} empty object indicate no possible solutions
 */
function combineSolution(solution, coin) {
  return {
    ...solution,
    [coin]: solution[coin] ? solution[coin] + 1 : 1,
  }
}
