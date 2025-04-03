// map 

const arr = [1, 2, 3]

// Array.prototype.myMap =  function(callback, thisArg){
//   if (this == null) {
//     throw new TypeError("Cannot read properties of null (reading 'map')");
//   }
//   if(typeof callback !== "function"){
//     throw new TypeError(callback + " its not a function")
//   }
//   let newArray = [];
//   for(let index = 0; index < this.length; index++){
//     newArray[index] = callback(this[index], index, this)
//   }
//   return newArray
// }

// const result = arr.myMap(item => item * 2)
// const result2 = arr.myMap((item)=>{
//   return item * 3
// })
// console.log(result)
// console.log(result2)

// filter 

// Array.prototype.myFilter = function(callback){
//   if(callback == null){
//     throw new TypeError("Cannot read properties of null (reading 'map')");
//   }
//   if(typeof callback !== "function"){
//     throw new TypeError(callback + " is not a function")
//   }
//   let newArray = [];
//   let newIndex = 0;
//   for(let index = 0; index < this.length; index++){
//       if(callback(this[index], index, this)){
//         newArray[newIndex] = this[index]
//         newIndex++
//       }
//   }
//   return newArray
// }

// const result = arr.myFilter(num => num % 2 === 1 && num)
// console.log(result)

// reduce 

Array.prototype.myReduce = function(callback, initial){
  if(typeof callback !== "function"){
    throw new TypeError(callback + " is not a function")
  }
  if(!this.length && initial === undefined){
    throw new TypeError("Reduce of empty array with no initial value")
  }

  let accumulator;
  let startIndex;

  if(initial !== undefined){
    accumulator = initial;
    startIndex = 0;
  }else{
    accumulator = this[0];
    startIndex = 1;
  }

  for(let index = startIndex; index < this.length; index++){
    accumulator = callback(accumulator, this[index], index, this)
  }
  return accumulator
}

const result = arr.myReduce((acc, crr) => acc + crr)
const result2 = arr.myReduce((acc, crr)=> acc + crr, 10)
console.log(result)
console.log(result2)