let data = [12, 13, 14, 15, 0];
let temp;
function coustomReverce(data, start, end) {
  console.log(data);
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    coustomReverce(data, start + 1, end - 1);
  }
}
coustomReverce(data, 0, data.length - 1);