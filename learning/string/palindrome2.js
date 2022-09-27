// https://leetcode.com/problems/valid-palindrome-ii/
// palindrome

const validPalindrome = (s) => {
  let n = s.length;
  for (let i = 0; i < n - 1; i++) {
    let j = n - i - 1;
    if (s[i] !== s[j]) {
      return isPalindrome(erase(s, i)) || isPalindrome(erase(s, j));
    }
  }
  return true;
};

const erase = (s, i) => {
  return s.slice(0, i) + s.slice(i + 1);
};

const isPalindrome = (str) => {
  const reverse = (str) => {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  };
  const reversedStr = reverse(str);
  if (reversedStr === str) {
    return true;
  }
  return false;
};

console.log(validPalindrome("aabac"));
