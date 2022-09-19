// Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// Recursion and backtracking
// const solve = (digits, output, index, mappings, current) => {
//   if (index === digits.length) {
//     output.push(current.join(""));
//     return;
//   }

//   for (const char of mappings[digits[index]]) {
//     current.push(char);
//     solve(digits, output, index + 1, mappings, current);
//     current.pop();
//   }
// };

// const letterCombinations = (digits) => {
//   const combinations = [];
//   const mappings = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };
//   const index = 0;
//   let current = [];
//   solve(digits, combinations, index, mappings, current);
//   return combinations;
// };

let letterCombinations = function (digits) {
  if (!digits.length) return [];
  const mappings = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const result = [];

  const solve = (string, index = 0) => {
    if (index === digits.length) {
      return result.push(string);
    }
    const mapping = mappings[digits[index]];
    for (let char of mapping) {
      solve(string + char, index + 1);
    }
  };
  solve("");
  return result;
};

console.log(letterCombinations("23"));
