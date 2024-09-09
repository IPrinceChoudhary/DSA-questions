// 3                      search value in an array 

const array = [23, 53, 62, 16, 73, 9];

// CONDITION :- if there is a unique element inside the array 

let item = 16;

for(i = 0; i<array.length; i++){
  if(array[i] === item){
    console.log(i)
    break
  }
}
// OR 
// console.log(array.indexOf(item))

// CONDITION :- if there is more than 1 same elements inside the array 

// const twoSameElementsArray = [23, 53, 62, 16, 73, 9, 16];

// const item = 16;
// const indexesArray = [];
// for(i=0; i<twoSameElementsArray.length; i++){
//   if(twoSameElementsArray[i] === item){
//     console.log(i);
//   }
// }
// OR i can store the indexes in array 
// for(let i = 0; i<twoSameElementsArray.length; i++){
//   if(twoSameElementsArray[i] == item){
//     indexesArray.push(i)
//   }
// }
// console.log(indexesArray)


// backward loop

// for(let i = twoSameElementsArray.length-1; i>= 0; i--){
//   twoSameElementsArray[i] === item && console.log(i)
// }
// const pushArray = []
// for(let i = twoSameElementsArray.length-1; i>= 0; i--){
//   twoSameElementsArray[i] === item && pushArray.unshift(i)
// }
// console.log(pushArray)
// console.log(pushArray.reverse())