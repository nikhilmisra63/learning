let count = {};
const charCount = (str, char) => {
  //   if (str.length == 0) {
  //     return 0;
  //   }

  str = str.toLowerCase();
  char = char.toLowerCase();

  console.log(str.split(char).length - 1);
};

console.log(charCount("abca", "a"));

const obj = {};
const charCountRecursion = (str, index) => {
  if (str.length == index) {
    return obj;
  }
  str = str.toLowerCase();
  char = str[index].toLowerCase();
  obj[char] = str.split(char).length - 1;

  return charCount(str, index + 1);
};

console.log(charCount("abcawewe ab", 0));
