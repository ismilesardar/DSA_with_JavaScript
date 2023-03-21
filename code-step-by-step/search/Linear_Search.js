// Linear Search in JavaScript
let data = [12,43,54,56,76,87,32,6,8,90];
let find = 54;
let pos = undefined;

for(let i=0; i<data.length; i++){
  if(data[i]==find){
    pos=i;
    break;
  }
}

if(pos){
  console.log(`Element Position is ${pos}`);
}else{
  console.log('Element not find!');
}