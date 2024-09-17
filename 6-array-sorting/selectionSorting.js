// 6                         sorting array with different ways

// Selection sort

//ascending
let data = [50, 33, 66, 28, 18]

for(let i = 0; i<data.length-1; i++){
  console.log(data[i]) // i = 0
  let index = i // index = 0
  for(let j = i + 1; j<data.length; j++){ // j = 1
    if(data[index] > data[j]){ // 50 > 33 yes
      index = j // index = 1
    }
    // In the next iteration:
    // j = 2, data[index] = 33, data[j] = 66, no change
    // j = 3, data[index] = 33, data[j] = 28, index = 3 (since 28 < 33)
    // j = 4, data[index] = 28, data[j] = 18, index = 4 (since 18 < 28)
  }
  if(index !== i){ // index = 4 !== i = 0
    let temp = data[i] // temp = 50
    data[i] = data[index] // [18, 33, 66, 28, 18]
    data[index] = temp // [18, 33, 66, 28, 50]
  }
  console.log(data)
}
console.log(data)

//descending 
// let data = [50, 33, 66, 28, 18]

// for(let i = 0; i<data.length-1; i++){
//   console.log(data[i])
//   let index = i 
//   for(let j = i + 1; j<data.length; j++){
//     if(data[index] < data[j]){ 
//       index = j
//     }
//   }
//   if(index !== i){
//     let temp = data[i]
//     data[i] = data[index]
//     data[index] = temp
//   }
// }
// console.log(data)

// NOTE:

// backward loop 

// for(let i = data.length-1; i> 0; i--){  // 4
//   let index = i; // 4
//   for(let j = i-1; j >= 0; j--){ // 3
//     if(data[index]<data[j]){ // 18 < 28 yes 
//       index = j // 3
//       // then 28 < 66 yes
//       // index = 2
//       // then 66 < 33 no ---> then 66 < 50 no
//       // so index = 2
//     }
//   }
//   if(index !== i){
//     let temp = data[index]
//     data[index] = data[i];
//     data[i] = temp // [50, 33, 18, 28, 66]
//     console.log(data)
//   }
// }
// console.log(data)