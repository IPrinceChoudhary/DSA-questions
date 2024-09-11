// 4.                        merge two arrays in a new array

const firstArray = [3,99,25,61,34,78,69]
const secondArray = [33,19,52,16,43,87]
let newArray = []

// spreadOperator 

// newArray = [...firstArray, ...secondArray]
// console.log(newArray)


// concat 

// newArray = firstArray.concat(secondArray)
// console.log(newArray)


// flat method 

// newArray = [firstArray, secondArray].flat()
// console.log(newArray)


// reduce and concat method 

// newArray = [firstArray,secondArray].reduce((acc, array)=> [...acc, ...array] , [])
// console.log(newArray)


// flatMap method 

// newArray = [firstArray, secondArray].flatMap((element)=> element)
// console.log(newArray)