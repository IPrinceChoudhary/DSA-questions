// 5.                        merge two arrays in a new array and sort

const firstArray = [3, 99, 25, 61, 34, 78, 69];
const secondArray = [33, 19, 52, 16, 25, 43, 87, 78];

// spread operator, sort, Set

// const resultArray = [...firstArray, ...secondArray].sort((a,b)=>a-b)
// const uniqueArray = [...new Set(resultArray)] // using spread operator to change back into an array
// console.log(uniqueArray)

// or 

//indexOf
// const resultArray = [...firstArray, ...secondArray].sort((a,b)=>a-b)
// const uniqueArray = resultArray.filter((el, i)=> resultArray.indexOf(el) === i)
// console.log(uniqueArray)


// concat
// const resultArray = firstArray.concat(secondArray).sort((a,b)=>a-b)


//reduce 
// const resultArray = firstArray.reduce((acc, curr)=> [...acc, curr], secondArray)

// or 

//includes
// const resultArray = [...firstArray, ...secondArray].reduce((acc,curr)=>acc.includes(curr) ? acc : [...acc, curr] ,[])
// console.log(resultArray)