// 2                      delete value in an array in a specific position

// SPLICE

const array = [23, 53, 62, 16, 73, 9];

const position = 3;

// array.splice(position, 1)
// console.log(array)


// SLICE and CONCAT

// const newArray = array.slice(0, position).concat(array.slice(position + 1))
// console.log(newArray)


// SPREAD OPERATOR and SLICE

// const newArray = [...array.slice(0, position), ...array.slice(position+1)]
// console.log(newArray)


// FILTER

// The filter() method in JavaScript is an array method that creates a new array with all elements that pass a test (or satisfy a condition) provided by a callback function. It does not modify the original array, but returns a new one. Parameters: callback(element, index(optional), array(optional)), this(optional). also ignores empty slots in the array.

// const newArray = array.filter((items) => !(items === array[position])); // it will also filter out, if the value is repeating in array
// console.log(newArray);
// Or 
// const newArray = array.filter((_, index)=> {
//   return !(index === position)
// })
// console.log(newArray)

// NOTE: the method is more precise if we want to remove the element according to the position in that array(removes only the element at the specified index, even if the array has duplicate values).
// Use the first approach if you want to remove all occurrences of a specific value in the array.
// Use the second approach if you want to remove only the element at a specific position, regardless of its value.


// REDUCE

// This method iterates over an array, applying a reducer function to each element, accumulating a single output value. It takes an initial value and processes elements from left to right, reducing the array to a single result. 2 parameters:- cb function(total, currentValue, currentIndex(optional), array(optional)), initialValue(optional). returns a single value/element after traversing the complete array.

