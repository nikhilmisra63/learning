function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;
  const freqObj1 = {};
  const freqObj2 = {};
  for (var i = 0; i < str1.length; i++) {
    freqObj1[str1[i]] = (freqObj1[str1[i]] || 0) + 1;
  }
  for (var j = 0; j < str2.length; j++) {
    freqObj2[str2[j]] = (freqObj2[str2[j]] || 0) + 1;
  }
  for (const key in freqObj1) {
    if (!(key in freqObj2)) {
      return false;
    }
    if (freqObj1[key] !== freqObj2[key]) return false;
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagrams", "nagarama"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("rat", "car"));
