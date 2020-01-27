// creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// LIFO
// start with empty first node, represented by null; top of stack
// stack has two primary functions- push and pop, to add/remove
class Stack {
  constructor() {
    this.top = null;
  }

  // push has O(1) constant time complexity
  push(data) {
    // if the stack is empty, the node will be the top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    // if stack isn't empty, create new node, add data to it, and
    // have pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    // before popping, point pointer to the next item, 
    // which will then become the top
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

}

module.exports = Stack;