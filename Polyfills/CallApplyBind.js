const obj1 = {
  name: "prince",
};

const obj2 = {
  name: "mickey",
};

function printAge(age, sports) {
  console.log(`${this.name} is ${age} years old and likes ${sports}`);
}

// call 

// Function.prototype.myCall = function(obj = {}, ...args){
//   console.log(this)
//   if(typeof this !== "function"){
//     throw new TypeError("Not a function")
//   }

//   obj.fn = this
//   obj.fn(...args)
// }

// printAge.myCall(obj2, 21)

// apply

// Function.prototype.myApply = function (obj = {}, args) {
//   if (typeof this !== "function") {
//     throw new TypeError("Not a function");
//   }
//   if(!Array.isArray(args)){
//     throw new TypeError("CreateListFromArrayLike called on non-object")
//   }
//   obj.fn = this;
//   console.log(args)
//   obj.fn(...args);
// };

// printAge.myApply(obj1, [22, "basketball"]);

// bind

Function.prototype.myBind = function(obj = {}, ...args){
  if(typeof this !== "function"){
    throw new TypeError("Not a function");
  }
  obj.fn = this;
  return function(...args2){
    obj.fn(...args, ...args2)
  }
}

const newFunction = printAge.bind(obj2, 22);
newFunction("basketball")