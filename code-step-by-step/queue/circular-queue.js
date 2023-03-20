 // Circular Queue in JavaScript
class Queue{
  constructor(size){
    this.max = size;
    this.item = new Array(size);
    this.cruntSize = 0;
    this.rear = -1;
    this.font = -1;
  }
  enqueue(val){
    if(this.cruntSize != this.max){
      if(this.rear == this.max-1){
        this.rear = 0;
      }else{        
        this.rear++;
      }
      this.item[this.rear]=val;
      this.cruntSize++;
      if(this.font == -1){
        this.font = this.rear;
      }
    }
  }

  dequeue(){
    if(this.cruntSize != 0){
      this.item[this.font]=null;
      if(this.font == this.max-1){
        this.font=0;
      }else{
        this.font++;
      }
      this.cruntSize--;
    }else{
      this.rear=-1;
      this.font=-1;
      console.log('Queue is empty!');
    }
  }
}

let data = new Queue(5);
data.enqueue(11);
data.enqueue(12);
data.enqueue(13);
data.enqueue(14);
data.enqueue(15);

data.dequeue()
data.dequeue()
data.dequeue()
data.dequeue()
data.dequeue()
// data.dequeue()

data.enqueue(100);
data.enqueue(101);
data.enqueue(102);
data.enqueue(103);
data.enqueue(104);
// data.enqueue(105);

console.log(data)
