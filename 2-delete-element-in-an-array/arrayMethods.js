// 2                      delete value in an array in a specific position

// SPLICE

const array = [23, 53, 62, 16, 73, 9];

const position = 3;

array.splice(position, 1)
console.log(array)


// Slice and Concat

// const newArray = array.slice(0, position).concat(array.slice(position + 1))
// console.log(newArray)


// Spread Operator and Slice

// const newArray = [...array.slice(0, position), ...array.slice(position+1)]
// console.log(newArray)


// Filter

// const newArray = array.filter((items) => !(items === array[position])); // it will also filter out, if the value is repeating in array
// console.log(newArray);
// Or
// const newArray = array.filter((_, index)=> {
//   return !(index === position)
// })
// console.log(newArray)

// NOTE: 


// Reduce

// const newArray = array.reduce((acc, curr, index) => {
  // return index !== position ? [...acc, curr] : acc
//   // OR 
//   if(index !== position){
//     acc.push(curr)
//   }
//   return acc
// }, []);

// console.log(newArray);


// ReduceRight

// const newArray = array.reduceRight((acc, curr, index)=> index !== position ? [curr, ...acc] : acc, [])
// const newArray = array.reduceRight((acc, curr, index)=>{
//   if(index !== position){
//     acc.unshift(curr)
//   }
//   return acc
// }, [])

// console.log(newArray)


// Array.from

// here
// const newArray = Array.from(array, (value, index)=> index !== position ? value : null).filter(val => val)
// const newArray = Array.from(array, (value, index)=> index !== position && value).filter(Boolean)
// const newArray = Array.from({length: array.length}, (_, index) => index !== position && array[index]).filter(Boolean)
// console.log(newArray)


// Map 

// const newArray = array.map((value, index)=> index !== position && value ).filter(Boolean)
// console.log(newArray)


// flatMap 

// const newArray = array.flatMap((element, index)=> index === position ? [] : element ) // flatMap() is designed to flatten the result. it gets flattened and essentially removed from the final result.
// const newArray = array.flatMap((element, index)=> index !== position && element).filter(Boolean)
// console.log(newArray)


// forEach

// const newArray = []
// array.forEach((element, index)=>{
//   if(index !== position){
//     newArray.push(element)
//   }
// })
// console.log(newArray)
// console.log(array)