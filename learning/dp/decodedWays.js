const decodedWays = (s) => {
  const helper = (s, k, memo) => {
    if (k === 0) return 1;
    const i = s.length - k;

    if (s[i] === "0") return 0;
    if (memo.has(k)) return memo.get(k);

    let result = helper(s, k - 1, memo);
    console.log(s[i], s.substring(i, i + 2));
    const isAlphabetical = Number(s.substring(i, i + 2)) <= 26;
    if (k >= 2 && isAlphabetical) result += helper(s, k - 2, memo);

    memo.set(k, result);

    return result;
  };

  return helper(s, s.length, new Map());
};
var numDecodings = function (s) {
  let next = 1;
  let next2 = 0;
  let tmp = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] > 2) {
      next2 = next;
    } else if (s[i] == 0) {
      next2 = next;
      next = 0;
    } else {
      if (s[i] == 1 || (s[i + 1] <= 6 && s[i] == 2)) {
        tmp = next;
        next = next + next2;
        next2 = tmp;
      } else {
        next2 = next;
      }
    }
  }
  return next;
};
console.log(numDecodings("12101"));
console.log(decodedWays("12101"));
