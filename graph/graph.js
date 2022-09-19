class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add Node
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    const vertex1AdjacencyList = this.adjacencyList[vertex1];
    const vertex2AdjacencyList = this.adjacencyList[vertex2];
    if (vertex1AdjacencyList) vertex1AdjacencyList.push(vertex2);
    if (vertex2AdjacencyList) vertex2AdjacencyList.push(vertex1);
  }
  removeVertices(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    const adjacencyList = this.adjacencyList[vertex];
    for (let i = 0; i < adjacencyList.length; i++) {
      this.removeVertices(vertex, adjacencyList[i]);
    }
    delete this.adjacencyList[vertex];
  }

  dfs(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    const traverse = (vertex) => {
      if (!vertex) return undefined;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((i) => {
        if (!visited[i]) traverse(i);
      });
    };
    traverse(vertex);
    return result;
  }
  // Depth first iterative
  dfsi(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = [];
    visited[vertex] = true;
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return result;
  }
  bfs(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    result.push(vertex);
    const traverse = (vertex) => {
      if (!vertex) return undefined;
      visited[vertex] = true;
      adjacencyList[vertex].forEach((i) => {
        if (!visited[i]) {
          result.push(i);
          traverse(i);
        }
      });
    };
    traverse(vertex);
    return result;
  }
  // Breadth first iterative
  bfsi(vertex) {
    const queue = [vertex];
    const visited = {};
    const result = [];
    visited[vertex] = true;
    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfs("A"));
console.log(g.bfs("A"));
