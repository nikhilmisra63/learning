// optimizing box weights

const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

function minimalHeaviestSetA(arr) {
  const result = [];
  const sortedArr = [...arr].sort((x, y) => (x - y > 0 ? -1 : 1));
  const target = sum(arr) / 2;

  console.log(target, sum(arr), sortedArr);

  for (let i = 0; i < arr.length; i += 1) {
    if (sum(result) > target) {
      break;
    }
    result[i] = sortedArr[i];
  }

  return result.reverse();
}

function main() {
  const result = minimalHeaviestSetA([5, 3, 2, 4, 1, 2, 9, 6]);
  console.log(result);
}

main();
