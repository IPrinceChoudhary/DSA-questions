// 1                      insert value in an array in a specific position

const array = [23, 53, 62, 16, 73, 9];

const position = 3;
let newValue = 69;

// SPLICE Method

//splice method start from the position default is 0 then deletes default 0 and the items to add inside an array, splice returns removed items in a new array if 0 items is to delete it will return an empty array, splice does modify the original array

// const data = array.splice(position, 1, newValue);

// array.splice(position, 0, newValue, 33) // can add multiple items
// console.log(array)
// console.log(data)


// SLICE and CONCAT and SPREAD OPERATOR method 

// slice method slices down the elements like this [start,end], returns a portion in a form of array in which the sliced items are there, slice doesn't modify the original array, also a way to make a copy of an array

// concat method concatenates(joins) two or more arrays .concat(array), returns a new array containing the joined arrays, doesn't modify the original array, also a way to make a copy of an array as the old and concatenated array will both be a different array

// spread operator is a syntax feature which helps in copying merging or expanding arrays, it does not return anything directly instead it is used to expand or spread elements, it does not modify the original array, also a way to make a copy of an array

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


// reduceRight method 

const newArray = array.reduceRight((arr, curr, index)=>{
  if(index >= position){
    arr[index + 1] = curr
  }
  if(index === position){
    arr[index] = newValue
  }
  return arr
},[...array])
console.log(newArray)