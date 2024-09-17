// 6                         sorting array with different ways

// bubble sort

//ascending
let data = [50, 33, 66, 28, 18]

// for(let i = 0; i<data.length; i++){
//   for(let j = 0; j<data.length; j++){
//     console.log(data)
//     if(data[j]>data[j+1]){
//       let temp = data[j];
//       data[j] = data[j+1]
//       data[j+1] = temp
//     }
//   }
// }
// console.log(data)

// better approach 
for(let i = 0; i<data.length; i++){
  for(let j = 0; j<data.length-1-i; j++){ // -1 bcoz as the bubble sort take the last element(in code data[j+1]) so no need to add that and for - i its because biggest element gets in the last of array after each iteration of i, so need to add it again in loop
    console.log(data)
    if(data[j]>data[j+1]){
      let temp = data[j];
      data[j] = data[j+1]
      data[j+1] = temp
    }
  }
}
console.log(data)

//descending 

// for(let i = 0; i<data.length; i++){
//   for(let j = 0; j<data.length; j++){
//     if(data[j]<data[j+1]){
//       let temp = data[j];
//       data[j] = data[j+1];
//       data[j+1] = temp
//     }
//   }
// }

// console.log(data)