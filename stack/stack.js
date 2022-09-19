class Node {
  constructor(val) {
    this.val = val;

    this.next = null;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let counter = 0;
    let currentFirst = this.first;
    if (currentFirst === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const stack = new Stack();
stack.push("0");
console.log(stack.push("1"));
// console.log(stack.pop());
