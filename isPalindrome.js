function isPalindrome(str) {
  const reverse = (str) => {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  };
  if (reverse(str) === str) return true;
  return false;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
