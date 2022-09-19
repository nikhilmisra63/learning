const stringSearch = (largeStr, smallStr) => {
  let totalMatch = 0;
  for (let i = 0; i < largeStr.length; i++) {
    for (let j = 0; j < smallStr.length; j++) {
      if (largeStr[i + j] !== smallStr[j]) break;
      if (j === smallStr.length - 1) totalMatch += 1;
    }
  }
  return totalMatch;
};

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("wowomgzomg", "omg"));
console.log(stringSearch("lolomglololroflol", "lolol"));

console.log(naiveSearch("wowomgzomg", "omg"));
console.log(naiveSearch("lolomglololroflol", "lolol"));

// w = 0 false
//
