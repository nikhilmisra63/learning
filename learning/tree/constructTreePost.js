class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Index {
  constructor() {
    this.postindex = 0;
  }
}

const constructTreeUtil = (post, postIndex, key, min, max, size) => {
  if (postIndex.postindex < 0) return null;
  var root = null;

  // If current element of post[] is in range, then
  // only it is part of current subtree
  if (key > min && key < max) {
    // Allocate memory for root of
    // this subtree and decrement *postIndex
    root = new Node(key);
    postIndex.postindex = postIndex.postindex - 1;

    if (postIndex.postindex >= 0) {
      // All nodes which are in range
      // {key..max} will go in right subtree,
      // and first such node will be root of
      // right subtree
      root.right = this.constructTreeUtil(
        post,
        postIndex,
        post[postIndex.postindex],
        key,
        max,
        size
      );

      // Construct the subtree under root
      // All nodes which are in range
      // {min .. key} will go in left
      // subtree, and first such node
      // will be root of left subtree.
      root.left = this.constructTreeUtil(
        post,
        postIndex,
        post[postIndex.postindex],
        min,
        key,
        size
      );
    }
  }
  return root;
};
const constructTree = (post, size) => {
  var index = new Index();
  index.postindex = size - 1;
  return this.constructTreeUtil(
    post,
    index,
    post[index.postindex],
    -2147483648,
    2147483647,
    size
  );
};
// Driver code
var post = [1, 7, 5, 50, 40, 10];
var size = post.length;

var root = constructTree(post, size);
