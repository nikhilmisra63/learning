// https://leetcode.com/problems/symmetric-tree/
// Symmetric Tree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right - null;
  }
}
const createTree = (arr, index = 0) => {
  if (index < arr.length && arr[index] !== null) {
    const node = new TreeNode(arr[index]);
    node.left = createTree(arr, 2 * index + 1);
    node.right = createTree(arr, 2 * index + 2);
    return node;
  }
  return null;
};

const firstTree = createTree([1, 2, 2, 3, 4, 4, 3], 0);
const secondTree = createTree([1, 2, 3]);

var isSymmetric = function (root) {
  if (!root) return true;
  const dfs = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return dfs(p.left, q.right) && dfs(p.right, q.left);
  };

  return dfs(root.left, root.right);
};

// var isSymmetric = function (root) {
//   if (!root) return true;
//   const a = dfs(root.left, root.right);
//   console.log(a, "as");
//   return a;
// };

// function dfs(s, t) {
//   if (!s && !t) return true;
//   if (!s || !t) return false;
//   if (s.val !== t.val) return false;

//   return dfs(s.left, t.right) && dfs(s.right, t.left);
// }

// console.log(isSymmetric(firstTree));
console.log(isSymmetric(secondTree));
