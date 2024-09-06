// 2                      delete value in an array in a specific position

const array = [23, 53, 62, 16, 73, 9];

const position = 3;

for(let i = array.length-1; i >= position; i--){
  if(i === position){
    for(let i = position; i < array.length; i++){
      array[i] = array[i + 1]
    }
  }
}
array.length--

console.log(array)