var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const ans = [];
  const list = [];

  const go = (i) => {
    if (i === s.length) {
      ans.push([...list].join(" "));
    }
    for (let j = i; j < s.length; j++) {
      const word = s.substr(i, j - i + 1);
      if (set.has(word)) {
        list.push(word);
        go(j + 1);
        list.pop();
      }
    }
  };
  go(0);
  return ans;
};

console.log(
  wordBreak("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple",
  ])
);
