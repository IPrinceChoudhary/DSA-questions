// 5.                        merge two arrays in a new array and sort

const firstArray = [3, 99, 25, 61, 34, 78, 69];
const secondArray = [33, 19, 52, 16, 25, 43, 87, 78];
let resultArray = [];

// for loop with push and sort

// sort method

// for(let i = 0; i<firstArray.length; i++){
//   resultArray.push(firstArray[i])
// }
// for(let i = 0; i<secondArray.length; i++){
//   resultArray.push(secondArray[i])
// }
// resultArray.sort((a,b) => a-b)
// console.log(resultArray)


// for loop without push and with sort 

// for(let i = 0; i<firstArray.length; i++){
//   resultArray[i] = firstArray[i]
// }

// for(let i = 0; i<secondArray.length; i++){
//   resultArray[firstArray.length + i] = secondArray[i]
// }
// console.log(resultArray.sort((a,b)=>a-b))


// for loop without push and without sort 

let index = 0;
for(let i = 0; i<firstArray.length; i++){
  resultArray[index] = firstArray[i];
  index++
}
for(let i = 0; i<secondArray.length; i++){
  resultArray[index] = secondArray[i];
  index++
}
console.log(resultArray)

for(let i = 0; i<resultArray.length; i++){
  for(let j = i + 1; j < resultArray.length; j++){
    if(resultArray[i] > resultArray[j]){
      let temp = resultArray[i]
      resultArray[i] = resultArray[j]
      resultArray[j] = temp
    }
  }
}
console.log(resultArray)