// Construct Binary Tree from Preorder and Postorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.frequency = 0;
  }
}

const constructFromPrePost = function (preorder, postorder) {
  if (preorder.length <= 0 || postorder.length <= 0) return null;
  // get first node from pre order because this will be the root node
  const val = preorder.shift();
  const root = new TreeNode(val);
  let mid = postorder.indexOf(preorder[0]);
  postorder.pop();
  root.left = constructFromPrePost(preorder, postorder.slice(0, mid + 1));
  root.right = constructFromPrePost(preorder, postorder.slice(mid + 1));
  return root;
};

console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]));
