// 6                         sorting array with different ways

// Merge sort
// recursion

const mergeSort = (data)=>{
  if(data.length <= 1){
    return data;
  }

  const half = Math.floor(data.length/2);
  const leftArray = data.slice(0, half);
  const rightArray = data.slice(half);

  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);

  return merge(sortedLeft, sortedRight);
}

const merge = (left, right)=>{
  let result = [];
  let i = 0, j = 0;

  while(i < left.length && j < right.length ){
    if(left[i] < right[j]){
      result.push(left[i]);
      i++;
    }
    else{
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i).concat(right.slice(j)))
}

let data = [50, 33, 66, 28, 18, 40, 60];
let sortedData = mergeSort(data);
console.log(sortedData);