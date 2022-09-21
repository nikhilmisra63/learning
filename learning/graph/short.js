// var countPaths = function (n, roads) {
//   const mod = 1e9 + 7;
//   const matrix = Array.from(new Array(n), () => new Array(n).fill(0));
//   const dist = [];
//   const arrive = [];
//   const edge = [];
//   for (let i = 0; i < n; i++) {
//     dist[i] = Infinity;
//     arrive[i] = false;
//     edge[i] = 0;
//   }
//   dist[0] = 0;
//   edge[0] = 1;
//   for (let i = 0; i < roads.length; i++) {
//     const from = roads[i][0];
//     const to = roads[i][1];
//     const len = roads[i][2];
//     matrix[from][to] = len;
//     matrix[to][from] = len;
//   }
//   console.log(matrix);
//   //   for (let i = 0; i < n - 1; i++) {
//   //     let minIdx = findMin(dist, arrive);
//   //     arrive[minIdx] = true;
//   //     for (let v = 0; v < n; v++) {
//   //       const newDist = dist[minIdx] + matrix[minIdx][v];
//   //       if (!arrive[v] && matrix[minIdx][v] && dist[minIdx] !== Infinity) {
//   //         if (newDist === dist[v]) {
//   //           edge[v] += edge[minIdx];
//   //           edge[v] %= mod;
//   //         } else if (newDist < dist[v]) {
//   //           edge[v] = edge[minIdx] % mod;
//   //           dist[v] = newDist;
//   //         }
//   //       }
//   //     }
//   //   }
//   //   return edge[n - 1];
// };

// function findMin(dist, arrive) {
//   let min = Infinity;
//   let minIdx = -1;
//   for (let j = 0; j < dist.length; j++) {
//     if (!arrive[j] && min > dist[j]) {
//       min = dist[j];
//       minIdx = j;
//     }
//   }
//   return minIdx;
// }

var countPaths = function (n, roads) {
  const MOD = 1e9 + 7;
  const MAX = Number.MAX_SAFE_INTEGER;

  const travelTimes = new Array(n).fill(MAX);
  const visited = new Array(n).fill(false);
  const graph = {};
  const routes = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [city1, city2, travelTime] of roads) {
    graph[city1].push({ node: city2, weight: travelTime });
    graph[city2].push({ node: city1, weight: travelTime });
  }

  const minHeap = new PriorityQueue({ priority: (x) => x[1] });

  travelTimes[0] = 0;
  routes[0] = 1;

  minHeap.enqueue([0, 0]);

  while (!minHeap.isEmpty()) {
    const [currCity, timeSoFar] = minHeap.dequeue().element;

    if (visited[currCity]) continue;
    if (travelTimes[currCity] < timeSoFar) continue;

    visited[currCity] = true;

    for (const [nextCity, nextTravelTime] of graph[currCity]) {
      if (visited[nextCity]) continue;

      if (timeSoFar + nextTravelTime < travelTimes[nextCity]) {
        travelTimes[nextCity] = timeSoFar + nextTravelTime;
        routes[nextCity] = routes[currCity] % MOD;

        minHeap.enqueue([nextCity, travelTimes[nextCity]]);
      } else if (timeSoFar + nextTravelTime === travelTimes[nextCity]) {
        routes[nextCity] = (routes[nextCity] + routes[currCity]) % MOD;
      }
    }
  }

  return routes[n - 1] % MOD;
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
