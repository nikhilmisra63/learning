class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let current = this.head;
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = current;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(val, n) {
    const node = this.get(n);
    if (!node) return undefined;
    node.val = val;
    return this;
  }

  insert(val, n) {
    if (n < 0 || n > this.length) return false;
    if (n === this.length) return this.push(val);
    if (n === 0) return this.unshift(val);
    const newNode = new Node(val);
    const prev = this.get(n - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length += 1;
    return this;
  }
  remove(n) {
    if (n < 0 || n > this.length) return undefined;
    if (n === this.length) return this.pop();
    if (n === 0) return this.shift();
    const prev = this.get(n - 1);
    prev.next = prev.next.next;
    // this.tail = prev.next;
    this.length -= 1;
    return this;
  }
  list() {
    return this;
  }
  reverse() {
    let currentHead = this.head;
    this.head = this.tail;
    this.tail = currentHead;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = currentHead.next;
      currentHead.next = prev;
      prev = currentHead;
      currentHead = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();

list.push("1");
// list.remove(3);
// console.log(JSON.stringify(list.remove(4)));
console.log(list.push("2"));
// console.log(JSON.stringify(list.list()));
