// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Maximum Depth of Binary Tree

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
const root = createTree([1, 2], 0);
var maxDepth = function (root) {
  let longest = 0;

  function dfs(node) {
    if (node == null) return 0;
    if (node.left == null && node.right == null) return 1;
    const left = dfs(node.left);
    const right = dfs(node.right);
    longest = Math.max(longest, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return longest;
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
