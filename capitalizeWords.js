function capitalizeWords(arr, n = 0) {
  if (n === arr.length) return arr;
  arr[n] = arr[n].toUpperCase();
  return capitalizeWords(arr, n + 1);
}

const arr = ["car", "taco", "banana"];
console.log(capitalizeWords(arr, 0));

// Capitalize first latter
function capitalizeFirst(arr, n) {
  if (n === arr.length) return arr;
  arr[n] = arr[n].charAt(0).toUpperCase() + arr[n].slice(1);
  return capitalizeFirst(arr, n + 1);
}

console.log(capitalizeFirst(arr, 0));
