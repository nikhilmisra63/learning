class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.frequency = 0;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) {
        current.frequency += 1;
        return this;
      }
      if (val < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return undefined;
    let currentRoot = this.root;
    let found = false;
    while (!found && currentRoot) {
      if (value < currentRoot.value) {
        currentRoot = currentRoot.left;
      } else if (value > currentRoot.value) {
        currentRoot = currentRoot.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return currentRoot;
  }
  bfs() {
    let node = this.root;
    const data = [];
    const queue = [];
    queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  dfsPre() {
    let node = this.root;
    const data = [];
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(node);
    return data;
  }
  dfsPost() {
    let node = this.root;
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };

    traverse(node);
    return data;
  }
  dfsIn() {
    let node = this.root;
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(node);
    return data;
  }
  dfsInOut() {
    let node = this.root;
    const leafNode = node;
    let printRight = false;
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node === leafNode) printRight = true;
      if (node.right && printRight) {
        traverse(node.right);
      }
    };

    traverse(node);
    return data;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
bst.insert(30);
console.log(bst.dfsIn());
console.log(bst.dfsInOut());
