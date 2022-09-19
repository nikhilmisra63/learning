// let newstr = "";
// const reverse = (str, n) => {
//   if (n < 0) return newstr;
//   newstr += str.split("")[n];
//   return reverse(str, n - 1);
// };
const str = "race";
// console.log(reverse(str, str.length - 1));

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse(str, str.length - 1));

// First time method will call with full string so str[0] will be = r
// Second time method will call with full "ace" so str[0] will be = a
// Third time method will call with full "ce" so str[0] will be = c and so on
// In the last call string will remain only "e" so str[0] will be = e
//  so the final string would be ecar because stack will return LIFO
