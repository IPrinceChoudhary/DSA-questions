// Factory function 

// function factory(name){
//   return {
//     name: name,
//     about: function(){
//       console.log(name + " is 22 years old")
//     }
//   }
// }
// const output = factory("Prince")
// console.log(output.constructor)

// Constructor function 

// function constructorFunction(name){
//   this.name = name;
//   this.about = function(){
//     console.log(name + " is 22 years old")
//   }
// }
// const result = new constructorFunction("Prince")
// console.log(result)
// console.log(output.constructor)


let str = "abc"
let temp = new String(str);        // Wrap into a String object
let result = temp.toUpperCase(); 
console.log(temp)
