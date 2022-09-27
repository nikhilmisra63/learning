// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
// Construct Binary Search Tree from Preorder Traversal

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var bstFromPreorder = function (preorder) {
  let bst = null;
  function addToBst(bst, val) {
    if (bst == null) return new TreeNode(val);
    if (val < bst.val) {
      bst.left = addToBst(bst.left, val);
    } else {
      bst.right = addToBst(bst.right, val);
    }
    return bst;
  }
  for (let node of preorder) {
    bst = addToBst(bst, node);
  }
  return bst;
};

// console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));

var bstFromPreorder = function (preorder) {
  let compute = (min = -Infinity, max = Infinity) => {
    // root will be in this range by default
    if (!preorder || !preorder.length) return null;
    if (preorder[0] > max || preorder[0] < min) return null; // range limits are breached;
    let root = new TreeNode(preorder.shift());
    root.left = compute(min, root.val);
    root.right = compute(root.val, max);
    return root;
  };
  return compute();
};

var bstFromPostorder = function (preorder) {
  let compute = (min = -Infinity, max = Infinity) => {
    // root will be in this range by default
    if (!preorder || !preorder.length) return null;
    if (preorder[0] > max || preorder[0] < min) return null; // range limits are breached;
    let root = new TreeNode(preorder.shift());
    root.right = compute(root.val, max);
    root.left = compute(min, root.val);
    return root;
  };
  return compute();
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
// console.log(bstFromPostorder([1, 7, 5, 50, 40, 10]));
