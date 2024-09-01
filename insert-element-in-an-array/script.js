// 1                      insert value in an array in a specific position

let array = [24, 36, 73, 15, 84, 28, 14];

const newValue = 69;
const position = 3;

// traditional for loop (reverse)

for (i = array.length - 1; i >= 0; i--) {
  if (i >= position) {
    array[i + 1] = array[i];
    if(i === position){
      array[i] = newValue
    }
  }
}

console.log(array);



// doing same with SPLICE function

// splice returns removed items //

// const data = array.splice(position, 1, newValue);

// array.splice(position, 0, newValue, 33) // can add multiple items
// console.log(array)
// console.log(data)
