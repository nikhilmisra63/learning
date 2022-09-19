class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;
    const currentFirst = this.first;
    if (currentFirst === this.last) {
      this.last = null;
    }
    this.first = currentFirst.next;
    this.length--;
    return this;
  }
}

const queue = new Queue();
queue.enqueue("0");
queue.enqueue("1");
console.log(queue.dequeue());
