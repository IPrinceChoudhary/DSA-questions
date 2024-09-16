// 6                         sorting array with different ways

//ascending
// let data = [50, 33, 66, 28, 18]

// for(let i = 0; i<data.length; i++){
//   for(let j = 0; j<data.length; j++){
//     if(data[i]<data[j]){
//       let temp = data[i];
//       data[i] = data[j]
//       data[j] = temp
//     }
//   }
// }
// console.log(data)


//descending
// let data = [50, 33, 66, 28, 18]

// for(let i = 0; i<data.length; i++){
//   for(let j = 0; j<data.length; j++){
//     if(data[i]>data[j]){
//       let temp = data[i];
//       data[i] = data[j]
//       data[j] = temp
//     }
//   }
// }
// console.log(data)


// It compares all pairs of elements in the array (i.e., data[i] with data[j]), without any focus on adjacent elements(next) or efficiency.

// It doesn't follow a formal algorithm like Bubble Sort or Selection Sort but still sorts the array based on pairwise comparisons.

// This technique isn't commonly recognized as a standard sorting algorithm, but you can describe it as a naive approach where each element is compared with every other element, and swaps are made immediately when a smaller element is found.