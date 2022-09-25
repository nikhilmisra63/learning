// https://leetcode.com/problems/recover-binary-search-tree/
// Recover Binary Search Tree

class TreeNode {
  constructor(val) {
    this.val = val;
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

const root = createTree([1, 3, null, null, 2], 0);

var recoverTree = function (root) {
  let node1 = null;
  let node2 = null;

  let prev = new TreeNode(Number.MIN_SAFE_INTEGER);
  inOrder(root);

  [node1.val, node2.val] = [node2.val, node1.val];

  function inOrder(node) {
    if (!node) return;

    inOrder(node.left);
    if (prev.val > node.val) {
      if (!node1) {
        node1 = prev;
      }
      node2 = node;
    }
    prev = node;
    inOrder(node.right);
  }
  //   return root;
};

console.log(recoverTree(root));
