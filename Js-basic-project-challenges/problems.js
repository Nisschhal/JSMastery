// ------------ Characters count
/* 
Write a function that takes in a string and returns counts of each character of string
    - 

*/

function charCounts(str) {
  let output = {};
  // do something
  for (let i = 0; i < str.length; i++) {
    if (output.hasOwnProperty(`${str[i].toLowerCase()}`)) {
      continue;
    } else {
      let count = 1;
      for (let j = i + 1; j < str.length; j++) {
        if (str[i].toLowerCase() === str[j].toLowerCase()) count++;
      }
      output[`${str[i].toLowerCase()}`] = count;
      count = 0;
    }
  }
  // return an object, key is lowercase char and value is the count of that character in given input
  // {a: 1, b: 2}
  return output;
}

function optimizedCount(str) {
  // store the char and cout in result object
  const result = {};

  // loop through each char and check its count
  for (let i = 0; i < str.length; i++) {
    // get the char
    const char = str[i].toLowerCase();
    // check is in result, if char count is greather than 0
    // if yes then increment its count
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
function moreOptimizedCharCount(str) {
  // store the char and cout in result object
  const result = {};

  // loop through each char and check its count
  for (let char of str) {
    // get the char
    char = char.toLowerCase();
    // check is in result, if char count is greather than 0
    // if yes then increment its count
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  )
    return false;
  return true;
}

console.log(charCounts("my name is nischal puri"));
console.log(optimizedCount("my name is nischal puri"));
console.log(moreOptimizedCharCount("my name is nischal puri"));
const arr = [12, 3, 4];
console.log(arr.indexOf(1234));
console.log({ 1: 10, 2: 12 });
