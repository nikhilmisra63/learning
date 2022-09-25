// Construct Binary Tree from Preorder and Postorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
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

// console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]));

// Construct from In order and Post order
const constructFromInPost = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  const val = postorder.pop();
  const root = new TreeNode(val);
  let mid = inorder.indexOf(val);
  root.right = constructFromInPost(
    inorder.slice(mid + 1, inorder.length),
    postorder
  );
  root.left = constructFromInPost(inorder.slice(0, mid), postorder);
  return root;
};

// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Construct Binary Tree from Preorder and Inorder Traversal
const constructFromPreIn = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const val = preorder.shift();
  const root = new TreeNode(val);
  let mid = inorder.indexOf(val);

  root.left = constructFromPreIn(preorder, inorder.slice(0, mid));
  root.right = constructFromPreIn(
    preorder,
    inorder.slice(mid + 1, inorder.length)
  );
  return root;
};

console.log(constructFromPreIn([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
