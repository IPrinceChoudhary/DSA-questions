// 6                         sorting array with different ways

//ascending
let data = [50, 33, 66, 28, 18]

for(let i = 0; i<data.length; i++){
  for(let j = 0; j<data.length; j++){
    if(data[j]>data[j+1]){
      let temp = data[j];
      data[j] = data[j+1]
      data[j+1] = temp
    }
    console.log(data)
  }
}
console.log(data)