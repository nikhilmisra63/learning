const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const freq = arr1.join().split(arr1[i]).length - 1;
    const sq = arr1[i] * arr1[i];

    if (!arr2.includes(sq)) {
      return false;
    }
    const sFreq = arr2.join().split(sq).length - 1;
    if (freq === sFreq) {
      return true;
    }
  }
  return false;
};

const anagrams = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let flag = true;
  for (let i = 0; i < arr1.length; i++) {
    const freq = arr1.split(arr1[i]).length - 1;

    if (!arr2.includes(arr1[i])) {
      return false;
    }

    const sFreq = arr2.split(arr1[i]).length - 1;
    if (freq === sFreq) {
      flag = flag ? true : false;
    } else {
      flag = false;
    }
  }
  return flag;
};

// console.log(anagrams("aaz", "aaz"));
console.log(anagrams("awesome", "awesom"));
console.log(anagrams("texttwisttime", "timetwisttext"));
