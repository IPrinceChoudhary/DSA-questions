// 3                      search value in an array

const array = [23, 53, 62, 16, 73, 9, 16];

let item = 16;

// forEach method

let pushArray = []
const newArray = array.forEach((element, index)=>{
  element === item && pushArray.push(index)
})
console.log(pushArray)


// map and filter method

// const newArray = array.map((element, index)=>{
  //   return element === item && index
  // }).filter(Boolean)
  // console.log(newArray)
  

//flatMap
  
// const newArray = array.flatMap((value, index) => value === item ? [index] : [])
// console.log(newArray)


// reduce method

// const newArray = array.reduce((acc, curr, index)=>{
//   if(curr === item){
//     acc.push(index)
//   }
//   return acc
// },[])
// console.log(newArray)
