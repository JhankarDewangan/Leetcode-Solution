// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

/**
 * @param {number} n
 * @return {number}
 */

    
var climbStairs = function(n) {
    if (n < 4) return n;
      let a = 1, b = 1, fib;
      for(let i = 2; i <= n; i++) {
          fib = a + b;
          a = b;
          b = fib;
      }
      return fib;
  };