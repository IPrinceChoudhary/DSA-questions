// 1                      insert value in an array in a specific position

const array = [23, 53, 62, 16, 73, 9];

const position = 3;
let newValue = 69;

// backward moving array
for(i = array.length-1; i>=position; i--){ 
  array[i+1] = array[i] 
  // JavaScript automatically extends the array to accommodate the new element. JS array behavior of automatic length extension
}
array[position] = newValue
console.log(array)

// NOTE :- The backward-moving array approach is generally faster because it directly shifts elements without requiring temporary storage or extra operations. It directly moves each element to the next index, ensuring that no values are overwritten or stored temporarily.
