function countUniqueChar(str) {
  let window = "";
  let newWindow = "";
  for (let [i, c] of str.split("").entries()) {
    if (newWindow.includes(c)) {
      if (window.length < newWindow.length) {
        window = newWindow;
        newWindow = "";
      }
    }
    newWindow += c;
  }
  return window;
}

console.log(countUniqueChar("hellothere"));

function maxSubarraySum(arr) {
  let window = [];
  let newWindow = [];
  for (let [i, c] of arr.entries()) {
    if (newWindow.includes(c)) {
      if (window.length < newWindow.length) {
        window = newWindow;
        newWindow = "";
      }
    }
    newWindow += c;
  }
  return window.reduce((acc, c) => acc + c, 0);
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5]));
