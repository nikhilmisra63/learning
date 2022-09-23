// https://leetcode.com/problems/balanced-binary-tree/
// Balanced Binary Tree

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
function createTree(arr, i) {
  if (i < arr.length && arr[i] !== null) {
    const node = new TreeNode(arr[i]);
    node.left = createTree(arr, 2 * i + 1);
    node.right = createTree(arr, 2 * i + 2);
    return node;
  }
  return null;
}

const root = createTree([3, 9, 20, null, null, 15, 7], 0);

var isBalanced = function (root) {
  return getHeight(root) !== -1;
};

const maxDepth = (root) => {
  if (root === null) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return 1 + Math.max(left, right);
};

console.log(isBalanced(root));
