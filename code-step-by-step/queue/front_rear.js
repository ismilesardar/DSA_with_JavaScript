// Front and Rear operations Queue with JavaScript
//Queue in JavaScript | Data Structure
let queue = [];
let crentSize = queue.length;
let maxSize = 5;

function enqueue(newItem) {
  if (crentSize >= maxSize) {
    console.log('Queue is Full');
  } else {

    queue[crentSize] = newItem;
    crentSize++;
  }
}

function dequeue() {
  if (isEmpty()) {
    for (let i = 0; i < crentSize; i++) {
      queue[i] = queue[i + 1];
    }
    crentSize--;
    queue.length = crentSize;
  } else {
    console.log('Queue is empty')
  }
}

function display() {
  console.log(queue);
}

function font() {
  if (isEmpty()) {
    console.log(queue[0]);
  } else {
    console.warn('Queue is Empty!');
  }
}
function rear() {
  if (isEmpty()) {
    console.log(queue[crentSize - 1]);
  } else {
    console.warn('Queue is Empty!');
  }
}

function isEmpty() {
  if (crentSize <= 0) {
    return false;
  } else {
    return true;
  }
}

enqueue(21);
enqueue(22);
enqueue(23);
enqueue(24);
// enqueue(25);
font()
rear()
display()

// dequeue()

// display()