// 6                         sorting array with different ways

// Insertion sort

//ascending
let data = [50, 33, 66, 28, 18];
for(let i = 1; i<data.length; i++){
  let current = data[i];
  let j = i - 1

  for(;j>=0 && data[j]>current; j--){
    data[j+1] = data[j]
  }
  data[j+1] = current
  console.log(data)
}
console.log(data)

//descending
// for (let i = 1; i < data.length; i++) {
//   let current = data[i];
//   let j = i - 1;
//   for (; j >= 0 && data[j] < current; j--) {
//     data[j + 1] = data[j];
//   }
//   data[j + 1] = current;
//   console.log(data);
// }
// console.log(data);
