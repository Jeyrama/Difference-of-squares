/*
Find the difference between the sum of the squares of the first 
n natural numbers (1 <= n <= 100) and the square of their sum.
*/


// Solution

function differenceOfSquares(x) {
  let sum = 0, squareSum = 0, i;
  for (i = 1; i <= x; i++) {
    sum += i*i;
    squareSum += i;
  }
  return squareSum*squareSum - sum;
} 

// or