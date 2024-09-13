// 5.                        merge two arrays in a new array and sort

const firstArray = [3, 99, 25, 61, 34, 78, 69];
const secondArray = [33, 19, 52, 16, 25, 43, 87, 78];
let resultArray = [];

// for loop 

// CONDITION : must be unique items(if item repeats in array don't include in the resultArray)

let found;
for(let i = 0; i<firstArray.length; i++){
  found = false; // no same item is presented in the array

  for(let k = 0; k<resultArray.length; k++){ // checking if the one item is already there in the resultArray
    if(firstArray[i] === resultArray[k]){
      found = true 
      break; // if yes then don't execute the further code for that repeated item
    }
  }

  if(!found){ // if the item is not repeated
    let inserted = false // default; value isn't inserted yet in the resultArray
    // main execution 
    for(let j=0; j < resultArray.length; j++){
      if(firstArray[i] < resultArray[j]){ // check whether the item is smaller than the items already presented in the result array
        for(let k = resultArray.length; k > j; k--){ // start from the length not last item, loop will go till the index of the result array item (item where we want to shift the item to the next index)
          resultArray[k] = resultArray[k-1] // it will duplicate the item of the last index and it will go further k > j
// NOTE: k++ approach would access an out-of-bounds index, and the array may not behave as expected
        } // now in the result array one item is repeating
        resultArray[j] = firstArray[i] // overwrite the repeated item 
        inserted = true;
        break
      }
    }
    // the one case could be that the item is bigger than every item of resultArray
    if(!inserted){
      resultArray[resultArray.length] = firstArray[i] // adding to length not last index coz it will overwrite the last index
    }
  }
}
// same logic for the secondArray
for(let i = 0; i<secondArray.length; i++){
  found = false;
  for(let k = 0; k < resultArray.length; k++){
    if(secondArray[i] === resultArray[k]){
      found = true;
      break
    }
  }

  if(!found){
    let inserted = false;
    for(let j = 0; j < resultArray.length; j++){
      if(secondArray[i] < resultArray[j]){
        for(let k = resultArray.length; k > j; k--){
          resultArray[k] = resultArray[k - 1];
        }
        resultArray[j] = secondArray[i]
        inserted = true
        break;
      }
    }
    if(!inserted){
      resultArray[resultArray.length] = secondArray[i]
    }
  }
}

// making unique items with Set
// for(let i = 0; i<firstArray.length; i++){
//     let inserted = false 
//     for(let j=0; j < resultArray.length; j++){
//       if(firstArray[i] < resultArray[j]){ 
//         for(let k = resultArray.length; k > j; k--){
//           resultArray[k] = resultArray[k-1]
//         }
//         resultArray[j] = firstArray[i]
//         inserted = true;
//         break
//       }
//     }
//     if(!inserted){
//       resultArray[resultArray.length] = firstArray[i]
//     }
//   }

// for(let i = 0; i<secondArray.length; i++){
//     let inserted = false;
//     for(let j = 0; j < resultArray.length; j++){
//       if(secondArray[i] < resultArray[j]){
//         for(let k = resultArray.length; k > j; k--){
//           resultArray[k] = resultArray[k - 1];
//         }
//         resultArray[j] = secondArray[i]
//         inserted = true
//         break;
//       }
//     }
//     if(!inserted){
//       resultArray[resultArray.length] = secondArray[i]
//     }
//   }
// const newResultArray = new Set(resultArray)
// console.log(newResultArray)


// CONDITION : include even repeated items(if item repeats in array include in the resultArray)

// for(let i = 0; i< firstArray.length; i++){
//   let inserted = false;
//   for(let j = 0; j<resultArray.length; j++){
//     if(firstArray[i] < resultArray[j]){
//       for(let k = resultArray.length; k > j; k--){
//         resultArray[k] = resultArray[k-1];
//       }
//       resultArray[j] = firstArray[i]
//       inserted = true;
//       break
//     }
//   }
//   if(!inserted){
//     resultArray[resultArray.length] = firstArray[i]
//   }
// }
// for(let i = 0; i< secondArray.length; i++){
//   let inserted = false;
//   for(let j = 0; j<resultArray.length; j++){
//     if(secondArray[i] < resultArray[j]){
//       for(let k = resultArray.length; k > j; k--){
//         resultArray[k] = resultArray[k-1];
//       }
//       resultArray[j] = secondArray[i]
//       inserted = true;
//       break
//     }
//   }
//   if(!inserted){
//     resultArray[resultArray.length] = secondArray[i]
//   }
// }
// console.log(resultArray)