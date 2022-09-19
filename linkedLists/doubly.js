class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length -= 1;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }

    this.length -= 1;
    return this;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (this.length === 0) return undefined;
    let counter;
    let current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(val, index) {
    if (this.length === 0) return undefined;
    const currentHead = this.get(index);
    currentHead.val = val;
    return this;
  }

  insert(val, index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.unshift();
    if (index === this.length) return this.push();
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    const newNode = new Node(val);
    beforeNode.next = newNode;
    newNode.next = afterNode;
    newNode.prev = beforeNode;
    this.length += 1;
    return this;
  }
  remove(n) {
    if (n < 0 || n > this.length) return undefined;
    if (this.length === 0) return this.pop();
    if (index === 0) return this.shift();
    const removedNode = this.get(n);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    this.length--;
    return this;
  }
}

const doubly = new DoublyLinkedList();

doubly.push("0");
doubly.push("1");
doubly.push("2");
doubly.push("4");
doubly.set("3", 3);
console.log(doubly.get(3));
