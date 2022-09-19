class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[this.values.length - 1];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMax() {
    let maxElement = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return maxElement;
  }

  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild > element) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (rightChild > element && rightChild > leftChild) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
