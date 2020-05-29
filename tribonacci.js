// sequencia de tribonacci
function tribonacci(signature, n) {
    let sequence = [...signature];
  
    if (n == 0) {
      return [];
    }
  
    if (n === 1) {
      return [1];
    }
  
    for (let x = 3; x < n; x++) {
      sequence.push(
        sequence[sequence.length - 1] +
          sequence[sequence.length - 2] +
          sequence[sequence.length - 3]
      );
    }
    return sequence.slice(0, n);
  }
  console.log(tribonacci([0, 0, 1], 0)); // []
  console.log(tribonacci([0, 0, 1], 1)); // [1]
  console.log(tribonacci([0, 0, 1], 2)); // [0, 0]
  console.log(tribonacci([0, 0, 1], 3)); // [0, 0, 2]
  console.log(tribonacci([0, 0, 1], 4)); // [ 0, 0, 1, 1]
  console.log(tribonacci([0, 0, 1], 5)); // [ 0, 0, 1, 1, 2]
  console.log(tribonacci([0, 0, 1], 6)); // [ 0, 0, 1, 1, 2, 4]
  console.log(tribonacci([0, 0, 1], 7)); // [ 0, 0, 1, 1, 2, 4, 7]
  console.log(tribonacci([0, 0, 1], 8)); // [ 0, 0, 1, 1, 2, 4, 7, 13]
  console.log(tribonacci([0, 0, 1], 9)); // [ 0, 0, 1, 1, 2, 4, 7, 13, 24]
  console.log(tribonacci([0, 0, 1], 10));// [ 0, 0, 1, 1, 2, 4, 7, 13, 24, 44]