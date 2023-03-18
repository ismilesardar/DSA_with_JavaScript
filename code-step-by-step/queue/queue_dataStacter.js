//Queue in JavaScript | Data Structure
let queue = [];
let crentSize = queue.length;
let maxSize = 5;

function enqueue(newItem){
  if(crentSize>=maxSize){
    console.log('Queue is Full');
  }else{
    
    queue[crentSize] = newItem;
  crentSize++;
  }
}

function dequeue(){
  if(crentSize>0){
    for(let i=0; i<crentSize ; i++){
    queue[i] = queue[i+1];
  }
  crentSize--;
  queue.length = crentSize;
  }else{
    console.log('Queue is empty')
  }
}

function display(){
  console.log(queue);
}

enqueue(21);
enqueue(22);
enqueue(23);
enqueue(24);
// enqueue(25);

display()

dequeue()

display()