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
      // if smallest is the node that we are looking for
      if (smallest === vertex2) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let nextNode of this.adjacencyList[smallest]) {
          console.log(nextNode);
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
    console.log(path);
    return path.concat(smallest).reverse();
  }
}

const graph = new Graph();

graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");

graph.addEdge("0", "1", 2);
graph.addEdge("0", "4", 5);
graph.addEdge("0", "6", 7);
graph.addEdge("1", "2", 3);
graph.addEdge("1", "3", 3);
graph.addEdge("2", "5", 1);
graph.addEdge("3", "5", 1);
graph.addEdge("3", "6", 3);
graph.addEdge("4", "6", 2);
graph.addEdge("5", "6", 1);
console.log(graph.shortestPath("0", "6"));
