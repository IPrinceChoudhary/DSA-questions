// 6                         sorting array with different ways

// Selection sort

//ascending
// let data = [50, 33, 66, 28, 18];

// for(let i = 0; i<data.length-1; i++){
//   let index = i;
//   for(let j = i + 1; j<data.length; j++){
//     if(data[index] > data[j]){
//       index = j
//     }
//   }
//   if(index !== i){
//     let temp = data[i];
//     data[i] = data[index]
//     data[index] = temp;
//   }
// }

// console.log(data)


//descending 

let data = [50, 33, 66, 28, 18]

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

for(let i = data.length-1; i> 0; i--){
  let index = i;
  for(let j = i-1; j >= 0; j--){
    if(data[index]<data[j]){ 
      index = j
    }
  }
  if(index !== i){
    let temp = data[index]
    data[index] = data[i];
    data[i] = temp
  }
}
console.log(data)