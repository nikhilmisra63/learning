// Multiple pointer

const pointer = (arr, n, startingIndex, lastIndex) => {
  if (n <= 0) return undefined;
  const sum = arr[startingIndex] + arr[lastIndex];
  if (sum === 0) {
    return [arr[startingIndex], arr[lastIndex]];
  } else if (sum < 0) {
    startingIndex += 1;
  } else {
    lastIndex -= 1;
  }
  return pointer(arr, n - 1, startingIndex, lastIndex);
};
// const arr = [-4, -3, -2, -1, 0, 1, 2, 4, 5];
// console.log(pointer(arr, arr.length, 0, arr.length - 1));

const uniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  const a = {};
  for (const iterator of arr) {
    a[iterator] = (a[iterator] || 0) + 1;
  }
  return Object.keys(a).length;
};

// const arr = [-4, -3, -2, -1, 0, 1, 2, 4, 5, 5];
const arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
console.log(uniqueValues(arr));
