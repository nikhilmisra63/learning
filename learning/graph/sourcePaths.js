// https://leetcode.com/problems/all-paths-from-source-to-target/
// All Paths From Source to Target
const allPathsSourceTarget = function (graph) {
  if (graph == null || graph.length == 0 || graph[0].length == 0) return [];
  const res = [];
  const inner = [0];

  helper = function (index) {
    if (index === graph.length - 1) {
      res.push([...inner]);
      return;
    }
    for (let next of graph[index]) {
      inner.push(next);
      helper(next);
      inner.pop();
    }
  };
  helper(0);

  return res;
};

console.log(allPathsSourceTarget([[1]]));
