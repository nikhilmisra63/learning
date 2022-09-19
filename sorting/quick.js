const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr.pop();
  const left = [];
  const right = [];
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return newArray.concat(quickSort(left), pivot, quickSort(right));
};

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
