let data = [];
let max = 5;
let crentSize = data.length;

function push(){
  let ele = document.getElementById('stackD').value 
  if(crentSize >= max) {
    console.log('Stack is fill');
  }
  data[crentSize] = ele;
  crentSize++
}

function pop(){
  if(crentSize > 0){
    crentSize--;
    data.length = crentSize;
  }else{
    console.log('stack is alrady empty');
  }
}

function display(){
  for(let i=0; i <= crentSize-1; i++){
    console.log(`index is ${i}, element is ${data[i]}`);
  }
}