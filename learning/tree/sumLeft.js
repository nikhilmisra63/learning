// https://leetcode.com/problems/sum-of-left-leaves/
// Sum of Left Leaves
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

const sumOfLeftLeaves = (root, isLeft) => {
  if (!root) return 0;
  if (!root.left && !root.right && isLeft) return root.value;

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};

console.log(sumOfLeftLeaves(root));
