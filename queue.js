class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FIFO
// store data in the order inw hich they occur
// ex: event loop in browser
class Queue {
  // first and last nodes, beginning and end of queue
  constructor() {
    this.first = null;
    this.last = null;
  }

  // adds data to queue, only at the end
  // O(1)
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    // make the new node the last item on the queue
    this.last = node;
  }

  // removes data, only at the beginning of queue
  // O(1)
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue;