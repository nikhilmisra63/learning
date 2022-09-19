const canConstruct = (targetString, words, memo = {}) => {
  //   if (targetString in memo) return memo[targetString];
  if (targetString === "") return [[]];
  const allConstruct = [];
  for (let word of words) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length);
      let suffixWays = canConstruct(suffix, words);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      console.log(targetWays);
      allConstruct.push(...targetWays);
    }
  }
  return allConstruct;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

// brute force time complexity o(n^m*m)
// brute force space complexity o(m^2)
