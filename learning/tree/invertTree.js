// https://leetcode.com/problems/invert-binary-tree/
// Invert Binary Tree

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

const root = createTree([2, 3, 5, 8, 13, 21, 34], 0);

var invertTree = function (root) {
  function reverse(t1, t2, level) {
    if (t1 == null || t2 == null) return;
    if (level % 2 == 1) {
      let temp = t1.value;
      t1.value = t2.value;
      t2.value = temp;
    }
    reverse(t1.left, t2.right, level + 1);
    reverse(t1.right, t2.left, level + 1);
  }
  reverse(root.left, root.right, 1);
  return root;
};

console.log(invertTree(root));
