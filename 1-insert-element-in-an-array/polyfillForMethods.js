// polyfill for push method - in the forLoop(forward-approach.js file)

// polyfill for slice method

// let example = [23,45,62,33,23435,52,35];
// let position = 4;
// let start = 0

// Array.prototype.sliceArray = function(start, position){
//   let newArray = new Array(position - start);
//   let index = 0;
//   for(let i = start; i<position; i++){
//     newArray[index] = this[i];
//     index++
//   }
//   return newArray;
// }

// const result = example.sliceArray(start, position);
// console.log(result);

// polyfill for concat method

// const firstArray = [1,2,3]
// const secondArray = [4,5,6]
// let oldArray = []

// Array.prototype.concatArray = function(...arrays){
//   let length = this.length;
//   for(let i = 0; i<arrays.length; i++){
//     length += arrays[i].length
//   }
//   let newArray = new Array(length);
//   let index = 0;
//   for(let i = 0; i<this.length; i++){
//     newArray[index] = this[i]
//     index++
//   }
//   for(let i = 0; i<arrays.length; i++){
//     let arr = arrays[i]
//     for(let j = 0; j<arr.length; j++){
//       newArray[index] = arr[j];
//       index++
//     }
//   }
//   return newArray
// }

// const result = oldArray.concatArray(firstArray, secondArray)
// console.log(result)

// polyfill for spread operator

// function spreadPolyfill(arr) {
//   let newArray = new Array(arr.length);

//   for (let i = 0; i < arr.length; i++) {
//     newArray[i] = arr[i];
//   }

//   return newArray;
// }

// const original = [1, 2, 3];
// const copy = spreadPolyfill(original);
// console.log(copy);

// polyfill for reduce

const array = [23, 53, 62, 16, 73, 9];

const position = 3;
let newValue = 69;

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (!accumulator) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let index = startIndex; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }
  return accumulator;
};

const addedValue = (arr, pos, newValue) => {
  return arr.myReduce((acc, curr, index, arr) => {
    if (index < pos) {
      acc[index] = curr;
    } else if (index === pos) {
      acc[index] = newValue;
      acc[index + 1] = curr;
    } else {
      acc[index + 1] = curr;
    }
    return acc;
  }, new Array(arr.length + 1));
};

const result = addedValue(array, position, newValue);
console.log(result);
