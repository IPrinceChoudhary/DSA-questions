// 1                      insert value in an array in a specific position

const array = [23, 53, 62, 16, 73, 9];

const position = 3;
let newValue = 69;


// 1... SPLICE Method

array.splice(position, 0, newValue);
// const data = array.splice(position, 1, newValue); // remove an item and add removed item in an array
// console.log(data)

// array.splice(position, 0, newValue, 33) // can add multiple items
console.log(array)


// 2... SLICE and CONCAT and SPREAD OPERATOR method

// const slicedArrayFromLast = array.slice(position, array.length);
// const slicedArrayFromStart = array.slice(0, position)
// const concatNewItem = slicedArrayFromStart.concat(newValue, slicedArrayFromLast)
// // console.log(concatNewItem)

// // short way
// const newArray = array.slice(0,position).concat(newValue).concat(array.slice(position))
// console.log(newArray)

// spread operator and slice

// const newArray = [...array.slice(0,position), newValue, ...array.slice(position)]
// console.log(newArray)


// 3... reduceRight method

// const newArray = array.reduceRight((arr, curr, index)=>{
//   if(index >= position){
//     arr[index + 1] = curr
//   }
//   if(index === position){
//     arr[index] = newValue
//   }
//   return arr
// },[...array])
// console.log(newArray)


// 4... Array.from method

// const newArray = Array.from({ length: array.length + 1 }, (_, i) => { // _ placeholder for the first parameter of the mapping function, which is the current value being processed. In this case, it’s not used (hence the underscore).
//   return i < position ? array[i] : i === position ? newValue : array[i - 1]
// })
// there is difference of syntax in the below code 
// const newArray = Array.from({length: array.length+1},(_, i)=>
//   i < position ? array[i] : i === position ? newValue : array[i-1]
// )
// console.log(newArray)


// 5... Map method with Flat

// const newArray = array.map((element, index)=>
//   index === position ? [newValue, element] : element
// ).flat()
// console.log(newArray);


// 6... flatMap

// const newArray = array.flatMap((element, index)=>{
//   return index === position ? [newValue, element] : element
// })
// console.log(newArray)