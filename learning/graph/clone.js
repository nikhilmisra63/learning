function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function (node) {
  if (node == null) return node;
  const oldToNew = {};

  const cloning = (node) => {
    if (node.val in oldToNew) return oldToNew[node.val];

    const copy = new Node(node.val);
    oldToNew[node.val] = copy;
    for (neighbor of node.neighbors) {
      copy.neighbors.push(cloning(neighbor));
    }
    return copy;
  };
  return cloning(node);
};

console.log(
  cloneGraph([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ])
);
