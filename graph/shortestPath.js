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

const priorityQueue = new PriorityQueue();

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });

    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  shortestPath(vertex1, vertex2) {
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    for (const key in this.adjacencyList) {
      const priority = vertex1 === key ? 0 : Infinity;
      distances[key] = priority;
      priorityQueue.enQueue(key, priority);
      previous[key] = null;
    }

    while (priorityQueue.values.length) {
      smallest = priorityQueue.deQueue().val;
      if (smallest === vertex2) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let nextNode of this.adjacencyList[smallest]) {
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            priorityQueue.enQueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.shortestPath("A", "E"));
