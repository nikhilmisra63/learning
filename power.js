// const power = (n, p, memo = {}) => {
//   if (p === 1) return n;
//   if (p in memo) return memo[p];
//   const ans = n * power(n, p - 1);
//   memo[p] = ans;
//   return ans;
// };

// console.log(power(2, 10));

function myPow(x, n) {
  if (n === 0) return 1;
  let pow = Math.abs(n);
  let result =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;
  return n < 0 ? 1 / result : result;
}

console.log(power(2.0, -2));
