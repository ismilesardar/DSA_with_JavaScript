let data = [];
let max = 5;
let crentSize = data.length;

//element push
function push(ele){
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

push(16);
push(17);
push(18);
push(19);
push(20);
push(21);

console.log(data);

pop();

console.log(data);