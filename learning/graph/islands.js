// https://leetcode.com/problems/number-of-islands/
// Number of Islands
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

var numIslands = function (grid) {
  if (grid === null || grid.length === 0) {
    return [];
  }
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        bfs([i, j], grid);
        count++;
      }
    }
  }
  return count;
};

const bfs = function (start, grid) {
  let queue = [];
  let cache = [];

  queue.push(start);
  grid[start[0]][start[1]] = "0"; // mark as visited

  while (queue.length !== 0) {
    let point = queue.shift();
    let r = point[0];
    let c = point[1];

    for (const [dx, dy] of directions) {
      let neighborRow = r + dx;
      let neighborCol = c + dy;
      // check row or columns is inbound and not already visited
      if (
        neighborRow < 0 ||
        neighborCol < 0 ||
        neighborRow >= grid.length ||
        neighborCol >= grid[0].length ||
        grid[neighborRow][neighborCol] === "0"
      ) {
        continue;
      }

      grid[neighborRow][neighborCol] = "0"; // mark as visited
      cache.push([neighborRow, neighborCol]);
    }
    if (queue.length === 0 && cache.length > 0) {
      queue.push(...cache);
      cache = [];
    }
  }
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
