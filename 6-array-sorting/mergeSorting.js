// 6                         sorting array with different ways

// Merge sort
// recursion

function mergeSort(data) {
  console.log(data)
  if (data.length <= 1) {
    return data;  // Base case: an array of one element is already sorted
  }

  // Step 1: Divide the array into two halves
  const mid = Math.floor(data.length / 2);
  console.log(mid)
  const left = data.slice(0, mid);
  console.log(left)
  const right = data.slice(mid);
  console.log(right)

  // Step 2: Recursively sort each half
  const sortedLeft = mergeSort(left);
  console.log(sortedLeft)
  const sortedRight = mergeSort(right);

  // Step 3: Merge the two sorted halves
  return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  console.log(arguments)
  let result = [];
  let i = 0, j = 0;

  // Step 4: Use `for` loops to merge the two arrays in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
    console.log(result)
  }
  console.log(result)

  // If there are remaining elements in left or right, add them to the result
  console.log(result.concat(left.slice(i)).concat(right.slice(j)))
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test the mergeSort function
let data = [50, 33, 66, 28, 18, 40, 60];
let sortedData = mergeSort(data);
console.log(sortedData);
