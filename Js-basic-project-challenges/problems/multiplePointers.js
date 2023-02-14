// Write a function called sumZero which accepts a sorted array or integers.
// The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    } else if (sum == 0) {
      return [arr[left], arr[right]];
    }
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, -1, 0, 1, 3]));

// Write a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  let unique = 0;
  let count = 0;
  for (let [i, a] of arr.entries()) {
    if (a > arr[unique]) {
      count++;
      unique = i;
    }
  }
  return count;
}
