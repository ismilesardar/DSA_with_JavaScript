// Reverse String with Stack in JavaScript 
const data = [];
let crentSize = data.length;

function push(item) {
  data[crentSize] = item;
  crentSize++;
}

function pop(){
  let lastItem = data[crentSize-1];
  crentSize--;
  data.length = crentSize;
  return lastItem;
}

function reverseString(item){
  // console.log(item)
  for(let i=0; i<item.length; i++){
    push(item[i]);
  }
  for(let i=0; i<item.length; i++){
    // console.log(pop())
    item[i] = pop();
  }
}

// push(21);
// push(22);
// pop()

let str = 'ismile';
str = str.split('');

// console.log(str)
reverseString(str)

console.log(str.join(''));