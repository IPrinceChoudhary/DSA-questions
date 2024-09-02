// 1                      insert value in an array in a specific position

const array = [23, 53, 62, 16, 73, 9];

const position = 3;
let newValue = 69;

// forward moving array
array.length = array.length + 1;

for (i = position; i < array.length; i++) {
  let temp = array[i]
  array[i] = newValue;
  newValue = temp // newValue becomes the temp value
}

console.log(array);

// NOTE :- The backward-moving array approach is generally faster because it directly shifts elements without requiring temporary storage or extra operations. It directly moves each element to the next index, ensuring that no values are overwritten or stored temporarily.