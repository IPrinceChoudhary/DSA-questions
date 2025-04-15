// 5.                        merge two arrays in a new array and sort

const firstArray = [3, 99, 25, 61, 34, 78, 69];
const secondArray = [33, 19, 52, 16, 25, 43, 87, 78];
let resultArray = [];

// for loop 

// CONDITION : must be unique items(if item repeats in array don't include in the resultArray)

let found;

for(let i = 0; i<firstArray.length; i++){
  found = false
  for(let j = 0; j<resultArray.length; j++){
    if(firstArray[i] === resultArray[j]){
      found = true
      break
    }
  }

  if(!found){
    let inserted = false;
    for(let j = 0; j<resultArray.length; j++){
      if(firstArray[i] < resultArray[j]){
        for(let k = resultArray.length; k > j; k--){
          resultArray[k] = resultArray[k-1];
        }
        resultArray[j] = firstArray[i];
        inserted = true;
        break
      }
    }
    if(!inserted){
      resultArray[resultArray.length] = firstArray[i]
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