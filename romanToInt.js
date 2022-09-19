// https://leetcode.com/problems/roman-to-integer/
const romans = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);
const romanToInt = (s) => {
  let result = 0;
  const arr = s.split("").reverse();
  let previous = 0;
  for (let i = 0; i < arr.length; i++) {
    const currentRoman = romans.get(arr[i]);
    if (currentRoman >= previous) {
      result += currentRoman;
    } else {
      result -= currentRoman;
    }
    previous = currentRoman;
  }
  return result;
};

// console.log(romanToInt("LVIII"));

const intToRoman = (num) => {
  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let i in lookup) {
    if (num < lookup[i]) continue;
    let q = Math.floor(num / lookup[i]);
    num -= q * lookup[i];
    roman += i.repeat(q);
  }
  return roman;
};

console.log(intToRoman("4"));
