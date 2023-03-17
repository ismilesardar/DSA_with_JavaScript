class Stack {
  constructor(arr, currentSize) {
    this.arr = arr;
    // console.log(this.arr);
    this.currentSize = currentSize;
    // console.log(this.currentSize);
  }
  push(newVal) {
    this.arr[this.currentSize] = newVal;
    this.currentSize++;
  }
  pop() {
    // for revStr add two line here 1st one and last one
    let lastRemovedItem = this.arr[this.currentSize - 1];
    this.currentSize--;
    this.arr.length = this.currentSize;
    return lastRemovedItem;
  }

  reverseString(strArr) {
    strArr.forEach((e) => {
      this.push(e);
    });
    strArr.forEach((e, i, arr) => {
      // pop();
      console.log(strArr[i]);
      strArr[i] = this.pop();
      // array that everytime updated!
      //   console.log(this.arr);
    });
    // for (let i = 0; i < strArr.length; i++) {
    //   strArr[i] = pop();
    return strArr;
  }
}
let arr = [];
let currentSize = arr.length;
const obj = new Stack(arr, currentSize);

// Rev string using push and pop method of stack!
const str = "Usman";
const strArr = [...str];
console.log(strArr);
const data = obj.reverseString(strArr);
console.log(data);