const Stack = require('./stack');
const Queue = require('./queue');

function mainStack() {
  let starTrek = new Stack;

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  //remove McCoy- need to pop twice
  // starTrek.pop();
  // starTrek.pop();

  return starTrek;
}

let stack = mainStack();
////////////////////

// 2. Useful methods for a stack

function peek(stack) {
  if (!stack.top) {
    return 'This stack is empty';
  }
  return stack.top.data;
}
// console.log(peek(stack));

function isEmpty(stack) {
  if (!stack.top) {
    console.log('Stack is empty');
    return true;
  }
  if (stack.top) {
    console.log('There\'s something in this stack');
    return false;
  }
}
// console.log(isEmpty(stack));

function display(stack) {
  let arr = [];
  let currentNode = stack.top;

  while (currentNode) {
    // console.log(currentNode);
    arr = [...arr, currentNode.data];
    // console.log(arr);
    currentNode = currentNode.next;
  }
  return arr;
}
// console.log(display(stack));

/////////////////

// 3. Check for palindromes using a stack

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let palindromeStack = new Stack();
  for (let i = 0; i < string.length; i++) {
    palindromeStack.push(string[i]);
  }

  for (let i = 0; i < string.length; i++) {
    let poppedItem = palindromeStack.pop();
    if (poppedItem !== string[i]) {
      return false;
    }
    return true;
  }

  // non-stack solution below, for my reference: 

  // if (string.length < 3) {
  //   return 'Input must be at least 3 characters long';
  // }
  // let halfway = stack.length / 2;
  // for (let i = 0; i < halfway; i++) {
  //   if (stack[i] !== stack[stack.length - i - 1]) {
  //     return 'Not a palindrome';
  //   }
  // }
  // return `Yep! '${string}' is a palindrome`;
}

// console.log(is_palindrome('dad')); // true
// console.log(is_palindrome('A man, a plan, a canal: Panama')); // true
// console.log(is_palindrome('1001')); // true
// console.log(is_palindrome('Tauhida')); // false

////////////////////

// 5. Sort Stack

// Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

function sortStack() {
  let originalStack = new Stack;
  let sortedStack = new Stack;

  originalStack.push(3);
  originalStack.push(9);
  originalStack.push(1);
  originalStack.push(6);
  originalStack.push(2);

  while (originalStack.top) {
    let elementToMove = originalStack.pop();

    while (sortedStack.top && sortedStack.top.data < elementToMove) {
      originalStack.push(sortedStack.pop());
    }
    sortedStack.push(elementToMove);
  }
  console.log('the stack has been sorted:', display(sortedStack));

  while (sortedStack.top) {
    originalStack.push(sortedStack.pop());
  }
  console.log('original stack is', display(originalStack));

}
// console.log(sortStack());


// 6. Create a queue using singly linked list

// see queue.js

function mainQueue() {
  let starTrekQ = new Queue;

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  // remove spoke, must dequeue twice
  starTrekQ.dequeue();
  starTrekQ.dequeue();

  // console.log(starTrekQ);
  return starTrekQ;
}
// console.log(mainQueue());
let queue = mainQueue();

function qPeek(queue) {
  if (!queue) {
    return 'Queue is empty';
  }
  return queue.first.value;
}
// console.log(qPeek(queue));

function qIsEmpty(queue) {
  if (!queue.dequeue()) {
    return true + ' ; queue is empty';
  }
  return false + ', there\'s something in this queue';
}
// console.log(qIsEmpty(queue));

function qDisplay(queue) {
  let arr = [];
  let currentNode = queue.first;
  while (currentNode) {
    arr = [...arr, currentNode.value];
    currentNode = currentNode.next;
  }
  return arr;
}
// console.log(qDisplay(queue));

// 9. Square dance pairing

function squareDancePairing() {
  let dancersL = new Queue();
  let dancersM = new Queue();

  dancersL.enqueue('Jane');
  dancersM.enqueue('Frank');
  dancersM.enqueue('John');
  dancersM.enqueue('Sherlock');
  dancersL.enqueue('Madonna');
  dancersM.enqueue('David');
  dancersM.enqueue('Christopher');
  dancersL.enqueue('Beyonce');
  // console.log(qDisplay(dancers));

  while (dancersL.first && dancersM.first) {
    console.log(`${dancersL.first.value} is dancin' the night away with ${dancersM.first.value}`);
    dancersL.dequeue();
    dancersM.dequeue();
  }

  if (!dancersL.first) {
    let currentMan = dancersM.first;
    while (currentMan) {
      console.log(`${currentMan.value} is without a partner`);
      // without this, infinite loop
      currentMan = currentMan.next;
    }
  }
  if (!dancersM.first) {
    let currentLady = dancersL.first;
    while (currentLady) {
      console.log(`${currentLady.value} is without a partner`);
      // without this, infinite loop
      currentLady = currentLady.next;
    }
  }
}
// console.log(squareDancePairing());


// 10. The Ophidian Bank

function bankLine(queue) {

  if (!queue.first) {
    return 'No one is in line.';
  }

  while (queue.first) {
    if (Math.random() <= .25) {
      let currentCustomer = queue.first;
      queue.dequeue();
      queue.enqueue(currentCustomer);
      console.log(`${queue.first.value} sent to the back of the line`);
    }
    else if (queue.first.value === null || queue.first.value === undefined) {
      console.log('null');
    }
    else {
      console.log(`${queue.first.value} served`);
      queue.dequeue();
    }
  }
}
let customerLine = new Queue();

customerLine.enqueue(1);
customerLine.enqueue(2);
customerLine.enqueue(3);
customerLine.enqueue(4);
customerLine.enqueue(5);
customerLine.enqueue(6);
customerLine.enqueue(7);
customerLine.enqueue(8);
customerLine.enqueue(9);
customerLine.enqueue(10);

// console.log(bankLine(customerLine));