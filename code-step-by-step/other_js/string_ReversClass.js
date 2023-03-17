class StringR {
  data = [];
  crentSize;
  str;
constructorons(rStr){
  this.str = rStr;
  this.crentSize = this.str.length;
}
  push(newVal) {
    this.data[this.crentSize] = newVal;
    this.crentSize++;
  }
  pop(){
    this.crentSize--;
    this.data.length = this.crentSize;
  }

  stringRevers(){
    for(let i=0; i<this.crentSize-1; i++){
      this.push(this.str[i]);
    }
    for(let i=0; i<this.crentSize-1; i++){
      this.push(this.str[i]);
    }
  }

  display(){
    console.log(this.data);
  }
  
}

let demo = new StringR('ismile');
demo.stringRevers();
demo.display()