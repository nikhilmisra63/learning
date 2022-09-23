// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Maximum Depth of Binary Tree

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
const root = createTree([3, 9, 20, null, null, 15, 7], 0);
var maxDepth = function (root) {
  // base case

  if (root === null) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
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

console.log(maxDepth(root));
