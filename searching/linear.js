const linearSearch = (arr, n) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === n) return index;
  }
  return -1;
};

// console.log(linearSearch([10, 15, 20, 25, 30], 15));

const binarySearch = (arr, n) => {
  let startIndex = 0;
  let lastIndex = arr.length - 1;
  while (startIndex <= lastIndex) {
    const middle = Math.floor((startIndex + lastIndex) / 2);
    const currentEle = arr[middle];
    if (currentEle === n) return middle;
    else if (currentEle < n) {
      startIndex = middle + 1;
    } else {
      lastIndex = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 10, 58], 4));
