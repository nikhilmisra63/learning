const canConstruct = (targetString, words, memo = {}) => {
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return 1;
  let count = 0;
  for (let word of words) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length);
      const result = canConstruct(suffix, words, memo);
      count += result;
    }
  }
  memo[targetString] = count;
  return count;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
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
