// 2                      delete value in an array in a specific position

const array = [23, 53, 62, 16, 73, 9];

const position = 3;

for(let i = 0; i < array.length; i++){
  if(i > position){
    array[i-1] = array[i]
  }
}
array.length-- // way to reduce length of an array, the array is resized, last item becomes inaccessible
console.log(array)

// modified way to do the same 
// for(let i = position; i < array.length; i++){
//   array[i] = array[i + 1]
// }
// array.length = array.length - 1