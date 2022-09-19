const findCircleNum = (isConnected) => {
  const graph = {};
  const visited = {};
  for (let i = 0; i < isConnected.length; i++) {
    const e = isConnected[i];
    graph[i] = [];
    for (let j = 0; j < e.length; j++) {
      if (j === i) continue;
      if (!e[j]) continue;
      graph[i].push(j);
    }
  }
  console.log(graph);
  let count = 0;
  const dfs = (vertex) => {
    if (vertex in visited) return false;
    visited[vertex] = true;
    for (let i = 0; i < graph[vertex].length; i++) {
      dfs(graph[vertex][i]);
    }
    return true;
  };
  for (let i = 0; i < isConnected.length; i++) {
    const res = dfs(i);
    if (res) count++;
  }
  return count;
};

console.log(findCircleNum([[1, 0, 0]]));
