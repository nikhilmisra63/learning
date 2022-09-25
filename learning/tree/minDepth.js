// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Minimum Depth of Binary Tree

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
const root = createTree([1, 2], 0);
var minDepth = function (root) {
  if (root == null) return 0;
  let lowest = Number.MAX_SAFE_INTEGER;

  function findMin(node, depth = 1) {
    if (node == null) return 0;
    if (node.left == null && node.right == null) {
      lowest = Math.min(lowest, depth);
    }
    findMin(node.left, depth + 1);
    findMin(node.right, depth + 1);
  }
  findMin(root);
  return lowest;
};

function createTree(arr, i) {
  if (i < arr.length && arr[i] !== null) {
    const node = new TreeNode(arr[i]);
    node.left = createTree(arr, 2 * i + 1);
    node.right = createTree(arr, 2 * i + 2);
    return node;
  }
  return null;
}

console.log(minDepth(root));
