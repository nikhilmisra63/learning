const power = (arr, n) => {
  if (n <= 0) {
    return arr[n];
  }
  return arr[n] * power(arr, n - 1);
};
const arr = [1, 2, 3];
console.log(power(arr, arr.length - 1));

// 1: 1
// 2: 2
// 3: 3
