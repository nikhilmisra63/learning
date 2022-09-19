// function anagrams(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   for (const key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) {
//       return false;
//     }
//   }
// }
// const t1 = performance.now();
// console.log(anagrams("aazq", "aazs"));
// // console.log(anagrams("awesome", "awesom"));
// // console.log(anagrams("texttwisttime", "timetwisttext"));
// const t2 = performance.now();
// console.log(t2 - t1);

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return { d: false, lookup };
    } else {
      lookup[letter] -= 1;
    }
  }

  return { d: true, lookup };
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram("anagrams", "nagaram"));
