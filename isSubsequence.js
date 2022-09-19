// function isSubsequence(str1, str2) {
//   if (str1 === str2) return true;
//   let i = 0;
//   let j = 0;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;

//     j++;
//   }
//   return false;
// }

function isSubsequence(str1, str2, i = 0, j = 0) {
  if (str1 === str2) return true;

  if (j >= str2.length) return false;

  if (str2[j] === str1[i]) {
    i++;
  } else {
    j++;
  }

  if (i === str1.length) return true;

  return isSubsequence(str1, str2, i, j++);
}

console.log(isSubsequence("abc", "acbac"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
console.log(isSubsequence("hello", "hello world"));
