class Stack {
  item = [];
  crentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.crentSize = this.item.length;
  }

  push(newVal) {
    if (this.crentSize >= this.maxSize) {
      console.log('Stack size is full');
    } else {
      this.item[this.crentSize] = newVal;
      this.crentSize++;
    }
  }

  pop(){
    if(this.crentSize>0){
      this.crentSize--;
      this.item.length = this.crentSize;
    }else{
      console.log('Stack is alradey Empty!');
    }
  }

  display(){
    console.log(this.item);
  }
  
}

let st1 = new Stack(5);

st1.push(20);
st1.push(21);
st1.push(22);
st1.push(23);
st1.push(24);
st1.display();
st1.pop();
st1.pop();
st1.pop();
st1.pop();
st1.pop();
st1.pop();
st1.display();