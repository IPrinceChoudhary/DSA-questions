// 2                      delete value in an array in a specific position

const array = [23, 53, 62, 16, 73, 9];

const position = 3;

for (let i = array.length - 1; i > position + 1; i--) { // if we change the array values, then it won't work
  let temp = array[i - 1];
  array[i - 1] = array[i];
  array[i - 2] = temp
}
array.length--;

console.log(array);
