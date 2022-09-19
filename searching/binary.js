const binarySearch = (arr, ele) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const currentElement = arr[middle];
    if (ele === currentElement) return currentElement;
    if (currentElement < ele) {
      min = middle + 1;
    } else if (currentElement > ele) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(binarySearch(arr, 1));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
