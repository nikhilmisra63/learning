// https://leetcode.com/problems/same-tree/
//  Same Tree

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

const firstTree = createTree([1, 2, 3], 0);
const secondTree = createTree([1, 2, 3]);

var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p !== null && q === null) return false;
  if (p === null && q !== null) return false;
  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);
  const val = p.val === q.val ? true : false;
  if (val && left && right) return true;
  return false;
};

console.log(isSameTree(firstTree, secondTree));
