//Queue in JavaScript | Data Structure
let queue = [];
let crentSize = queue.length;
let maxSize = 5;

function enqueue(newItem){
  queue[crentSize] = newItem;
  crentSize++;
}


enqueue(21);

display()

dequeue()