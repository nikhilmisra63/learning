class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add Node
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });

    this.adjacencyList[vertex2].push({ node: vertex1, weight });
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
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B", 10);
g.addEdge("A", "C", 21);
g.addEdge("B", "C", 19);
console.log(g.adjacencyList);
