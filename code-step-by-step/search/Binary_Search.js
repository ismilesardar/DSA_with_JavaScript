// Binary Search in JavaScript 
let data = [12, 14, 15, 22, 33, 44, 55, 66, 77, 88, 99, 101];
let find = 44;
let start = 0;
let end = data.length - 1;
let positions = undefined;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  // console.log(mid)
  if (data[mid] === find) {
    positions = mid;
    break;
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    start = mid - 1;
  }
}
console.log(positions, data[positions])
