// 4.                        merge two arrays in a new array

// for loop 

const firstArray = [3,99,25,61,34,78,69]
const secondArray = [33,19,52,16,43,87]
let newArray = []

for(let i = 0; i < firstArray.length; i++){
  newArray[i] = firstArray[i]
  // newArray.push(firstArray[i])
}
console.log(newArray)

for(let i = 0; i<secondArray.length; i++){
  newArray[firstArray.length + i] = secondArray[i]
// newArray.push(secondArray[i])
}
console.log(newArray)

  // CONDITION : print the reverse values 
  
  // for(let i = 0; i < firstArray.length; i++){
  //   newArray[i] = firstArray[i]
  // }
  
  // for(let i = 0; i<secondArray.length; i++){
  //   newArray[firstArray.length + i] = secondArray[i]
  // }
  // let reverseArray = []
  // for(let i = 0, j = newArray.length - 1; i <newArray.length, j >= 0; i++, j--){
  //   reverseArray[j] = newArray[i]
  // }
  // console.log(reverseArray)
  // OR 
  // for(let i = 0, j = secondArray.length - 1; i < secondArray.length, j >= 0; i++, j--){
  //   newArray[j] = secondArray[i] 
  // }
  // for(let i = 0, j = firstArray.length-1; i<firstArray.length, j>=0; i++, j--){
  //   newArray[secondArray.length + j] = firstArray[i]
  // }
  // console.log(newArray)


// backward loop 

// for(let i = firstArray.length-1; i >= 0; i--){
//   newArray[i] = firstArray[i] // this will not reverse print values, focus on i here as both i are same 
// }
// for(let i = secondArray.length-1; i >= 0; i--){
//   newArray[firstArray.length + i] = secondArray[i] 
// }
// console.log(newArray)
