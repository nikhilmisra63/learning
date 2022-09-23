// https://leetcode.com/problems/root-equals-sum-of-children/
// Root Equals Sum of Children

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function createTree(arr, i = 0) {
  if (i < arr.length && arr[i] !== null) {
    const node = new TreeNode(arr[i]);
    node.left = createTree(arr, 2 * i + 1);
    node.right = createTree(arr, 2 * i + 2);
    return node;
  }
  return null;
}
const root = createTree([10, 4, 6]);

var checkTree = function (root) {
  if (root === null) return false;
  if (root.val === root.left.val + root.right.val) return true;
  return false;
};

console.log(checkTree(root));
