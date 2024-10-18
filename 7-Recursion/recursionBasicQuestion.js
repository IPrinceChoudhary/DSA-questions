// calculate factorial without using loop and using Recursion

let factorial = 5;
function calculateFactorial(data){
  // if(data === 0){
  //   return 1
  // }
  // or 
  if(data === 1){
    return 1
  }
  return data * calculateFactorial(--data)
}
console.log(calculateFactorial(factorial))

// arrow function 

// let factorial = 5

// const calculateFactorial = (data)=> data === 0 ? 1 : data * calculateFactorial(data - 1)
// console.log(calculateFactorial(factorial))

// with for loop 