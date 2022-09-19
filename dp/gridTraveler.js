const gridTraveler = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 2));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));

// brute force complexity               memoized
//  Time O(2 to power n+m)              Time O(n*m)
//  Space O(n+m)                        Space O(n+m)

// Tabulation

const gridTravelerT = (m, n) => {
  const arr = new Array(m + 1).fill().map((a) => Array(n + 1).fill(0));
  arr[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i + 1 <= m) arr[i + 1][j] += arr[i][j];
      if (j + 1 <= n) arr[i][j + 1] += arr[i][j];
    }
  }
  return arr[m][n];
};

console.log(gridTravelerT(3, 3));
