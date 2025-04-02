// map 

const arr = [1, 2, 3]

Array.prototype.myMap = function(callback){
  const newArray = [];
  for(let index = 0; index < this.length; index++){
    newArray[index] = callback(this[index], index, this)
  }
  return newArray
}

const result = arr.myMap(num => num * 2)
console.log(result)