function squareSum(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number ** 2;
  }
  return sum;
}

console.log(squareSum([1, 2, 2]));
// console.log(squareSum([0, 3, 4, 5]));
