// 1                      insert value in an array in a specific position

const array = [23, 53, 62, 16, 73, 9];

const position = 3;
let newValue = 69;

// increasing the length of array first
array.length = array.length + 1;

// forward moving array
for(i = position; i < array.length; i++){
  let temp = array[i];
  array[i] = newValue;
  newValue = temp
}

console.log(array);

// NOTE :- The backward-moving array approach is generally faster because it directly shifts elements without requiring temporary storage or extra operations. It directly moves each element to the next index, ensuring that no values are overwritten or stored temporarily.


// CONDITION :- do without increasing the length of an array 

// for (let i = position; i < array.length; i++) {
//   let temp = array[i]
//   array[i] = newValue;
//   newValue = temp
// }
// array.push(newValue)
// console.log(array)

// Push adds elements in the last of an array, modifies the original array, return the length of modified array 


// CONDITION 2 :- do with making an empty array with new Array()
// let newArray = new Array(array.length + 1) // creates a new array with empty items// in this case (6+1)
// for(i = 0; i < position; i++){ // The loop control (for (let i = 0; i < position; i++)) only manages the index i. It doesn't need to reference the array directly because it's only responsible for iterating over the indices.
//   newArray[i] = array[i] // The reference to array happens inside the loop body: newArray[i] = array[i];. This is where the elements of array are accessed and assigned to newArray.
// }
// newArray[position] = newValue;
// for(i = position; i<array.length; i++){
//   newArray[i + 1] = array[i]
// }
// console.log(newArray)