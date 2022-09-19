// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/

const subSequence = (text1, text2) => {
  const n1 = text1.length;
  const n2 = text2.length;

  const dp = new Array(n1 + 1).fill().map(() => new Array(n2 + 1).fill(0));

  for (let i = n1 - 1; i >= 0; i--) {
    for (let j = n2 - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[0][0];
};

// const subSequence = (
//   text1,
//   text2,
//   n1 = text1.length - 1,
//   n2 = text2.length - 1,
//   memo = {}
// ) => {
//   //  base case
//   if (n1 < 0 || n2 < 0) return 0;
//   const key = `${n1},${n2}`;
//   if (key in memo) return memo[key];
//   let result = 0;
//   if (text1.charAt(n1) === text2.charAt(n2)) {
//     result = subSequence(text1, text2, n1 - 1, n2 - 1, memo) + 1;
//   } else {
//     result = Math.max(
//       subSequence(text1, text2, n1 - 1, n2, memo),
//       subSequence(text1, text2, n1, n2 - 1, memo)
//     );
//   }
//   memo[key] = result;
//   return result;
// };
console.log(subSequence("ezupkr", "ubmrapg"));
