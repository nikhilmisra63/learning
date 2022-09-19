// 139. Word Break
// https://leetcode.com/problems/word-break/

const canConstruct = (targetString, words, memo = {}) => {
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return true;

  for (let word of words) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length);
      if (canConstruct(suffix, words, memo) === true) {
        memo[targetString] = true;
        return true;
      }
    }
  }
  memo[targetString] = false;
  return false;
};

console.log(canConstruct("catsandog", ["cats", "dog", "sand", "and", "cat"]));
// console.log(
//   canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//   canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//   ])
// );

// brute force time complexity o(n^m*m)
// brute force space complexity o(m^2)
