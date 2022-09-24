// https://leetcode.com/problems/insertion-sort-list/
// Insertion Sort List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const createList = (arr) => {
  let newNode = new Node(arr[0]);

  for (let i = arr.length - 1; i >= 0; i--) {
    const nextNode = new Node(arr[i]);
    nextNode.next = newNode;
    newNode = nextNode;
  }
  return newNode;
};

var insertionSortList = function (head) {
  let ans = new Node();
  while (head) {
    let next = head.next;
    let prev = ans;
    while (prev.next && prev.next.val < head.val) {
      prev = prev.next;
    }
    head.next = prev.next;
    prev.next = head;
    head = next;
  }

  return ans.next;
};

const head = createList([4, 2, 1, 3]);

console.log(insertionSortList(head));
