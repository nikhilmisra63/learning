// Number of Ways to Arrive at Destination
// https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enQueue(val, priority) {
    this.values.push({ val, priority });
    return this.sort();
  }
  deQueue() {
    return this.values.shift();
  }
  sort() {
    return this.values.sort((a, b) => a.priority - b.priority);
  }
}

const countPaths = (n, roads) => {
  const MOD = 1e9 + 7;
  const distances = {};
  const previous = {};
  const graph = {};
  let path = new Array(n).fill(0);
  const priorityQueue = [];
  const visited = new Array(n).fill(false);
  let smallest;
  // Make adjacency list
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [city1, city2, travelTime] of roads) {
    graph[city1].push({ node: city2, weight: travelTime });
    graph[city2].push({ node: city1, weight: travelTime });
  }
  for (const key in graph) {
    const priority = Infinity;
    distances[key] = priority;
    priorityQueue.push({ val: key, priority });
    previous[key] = null;
  }
  priorityQueue[0] = { val: 0, priority: 0 };
  distances[0] = 0;
  path[0] = 1;
  while (priorityQueue.length) {
    smallest = priorityQueue.shift();
    const currCity = smallest.val;
    const timeSoFar = smallest.priority;
    if (visited[currCity]) continue;
    for (const neighbor of graph[currCity]) {
      const nextCity = neighbor.val;
      const nextTravelTime = neighbor.priority;
      if (visited[nextCity]) continue;

      if (timeSoFar + nextTravelTime < distances[nextCity]) {
        distances[nextCity] = timeSoFar + nextTravelTime;
        path[nextCity] = path[currCity] % MOD;

        minHeap.enqueue([nextCity, distances[nextCity]]);
      } else if (timeSoFar + nextTravelTime === distances[nextCity]) {
        path[nextCity] = (path[nextCity] + path[currCity]) % MOD;
      }
    }
  }
  return path[n - 1] % MOD;
  //   return path.concat(smallest).reverse();
};

console.log(
  countPaths(7, [
    [0, 6, 7],
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 3],
    [6, 3, 3],
    [3, 5, 1],
    [6, 5, 1],
    [2, 5, 1],
    [0, 4, 5],
    [4, 6, 2],
  ])
);
