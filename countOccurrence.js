const str = "the then the these these these";

console.log((str.match(/the/g) || []).length);

function countOccurrences(string, word) {
  return string.split(word).length - 1;
}

const splitStr = str.split(" ");
const unique = splitStr.filter((x, i) => i === splitStr.indexOf(x));
const totalCount = [];
for (let i = 0; i < unique.length; i += 1) {
  totalCount.push({ [unique[i]]: countOccurrences(str, unique[i]) });
}

console.log(totalCount);
