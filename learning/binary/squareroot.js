// https://leetcode.com/problems/sqrtx/
//  Square root with binary search
var mySqrt = function (x) {
  let start = 0;
  let end = x;

  let ans = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    const sq = mid * mid;
    if (sq === x) {
      return mid;
    } else if (sq < x) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return getPerfectAns(3, Math.floor(ans), x);
};

const getPerfectAns = (pre, ans, n) => {
  let factor = 1;
  for (let i = 0; i < pre; i++) {
    factor = factor / 10;
    for (let j = ans; j * j < n; j = j + factor) {
      ans = j;
    }
  }
  return ans;
};

// console.log(mySqrt(8));
// console.log(mySqrt(0));
// console.log(mySqrt(5));
console.log(mySqrt(101));
