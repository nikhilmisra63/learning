// https://leetcode.com/problems/course-schedule/
// Course Schedule

const findOrder = function (numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const graph = {};
  const obj = {};
  const indegree = Array(numCourses).fill(0);

  for (const [e, v] of prerequisites) {
    if (v in obj) {
      graph[v].push(e);
    } else {
      graph[v] = [e];
    }
    indegree[e]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    if (v in graph) {
      for (const e of graph[v]) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }

  return numCourses === order.length ? order : [];
};

console.log(
  findOrder(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ])
);
