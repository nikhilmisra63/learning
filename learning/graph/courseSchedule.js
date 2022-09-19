// https://leetcode.com/problems/course-schedule/
//  Course Schedule

const canFinish = (numCourses, prerequisites) => {
  const graph = {};
  const visited = {};
  for (let [course, dependency] of prerequisites) {
    if (!graph[course]) graph[course] = [];
    graph[course].push(dependency);
  }

  const traverse = (vertex) => {
    if (visited[vertex]) return false;

    if (!graph[vertex] || graph[vertex].length <= 0) return true;
    visited[vertex] = true;
    for (let i = 0; i < graph[vertex].length; i++) {
      const result = traverse(graph[vertex][i]);
      if (!result) return false;
    }
    delete visited[vertex];
    graph[vertex] = [];
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!traverse(i)) return false;
  }
  return true;
};

//  Topological sort using kahan's Algorithm
// Following BFS

const canFinish2 = (numCourses, prerequisites) => {
  const graph = {};
  const queue = [];
  const output = [];
  const indegree = new Array(numCourses).fill(0);

  for (let [course, dependency] of prerequisites) {
    // course = edge
    //  depend = vertex
    if (dependency in graph) {
      graph[dependency].push(course);
    } else {
      graph[dependency] = [course];
    }
    indegree[course]++;
  }
  console.log(graph, indegree);
  // Add all indegree element in queue
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  console.log(queue, "q");
  while (queue.length) {
    const vertex = queue.shift(); // get first vertex
    if (vertex in graph) {
      for (const edge of graph[vertex]) {
        indegree[edge]--;
        if (indegree[edge] === 0) queue.push(edge);
      }
    }
    output.push(vertex);
  }
  return numCourses === output.length ? output : [];
};

console.log(
  canFinish2(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

// {0: [], 1: [0], 2: [0], 3: [1, 2]}
