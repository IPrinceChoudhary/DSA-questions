// 3                      search value in an array

const array = [23, 53, 62, 16, 73, 9, 16];

let item = 16;

// for of

let index = 0

for (const element of array) {
  if(element === item){
    console.log(index)
  }
  index++
}

//push in array
// let pushArray = []
// for (let element of array){
//   if(element === item){
//     pushArray.push(index)
//   }
//   index++
// }
// console.log(pushArray)


// for in

// for(let index in array){
//   if(item === array[index])
//   console.log(index)
// }

// NOTE :-


// while loop 

// let i = 0;
// while (i < array.length) {
//   if (item === array[i]) {
//     console.log(i);
//   }
//   i++
// }


// do while loop

// let i = 0;
// do {
//   if(item === array[i])
//   console.log(i);
//   i++
// } while(i < array.length)