// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, pharase, or name formed by rearranging the letters of another.
// Example:  cinema, formed from iceman

// need to same frequency on word count and each char count
// object for both strs to store frequency
// check for the frequency for each in one another str

function isAnagram(str1, str2) {
  // if they not same length, not an anagram
  if (str1.length !== str2.length) {
    return false;
  }

  const st1 = {};
  const st2 = {};
  // create an object for both with each char count
  for (let char of str1) {
    st1[char] = ++st1[char] || 1;
  }
  for (let char of str2) {
    st2[char] = ++st2[char] || 1;
  }
  // check if both have same char counts

  for (let char of str1) {
    if (st1[char] !== st2[char]) {
      return false;
    }
  }
  return true;
}

function optimizedIsAnagram(str1, str2) {
  // if they not same length, not an anagram
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  // create an object for both with each char count
  for (let char of str1) {
    lookup[char] = ++lookup[char] || 1;
  }

  for (let char of str2) {
    if (!lookup[char]) {
      return;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
}

console.log(isAnagram("name", "eanm"));
console.log(optimizedIsAnagram("name", "eanm"));

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the same array.
// The Frequency value must be the same.

function isSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // two ways to do it: either store the frequency of each char in two object
  // or just check for the squared value and delete it from squared array
  const arr1Object = {};
  const arr2Object = {};

  for (let char of arr1) {
    arr1Object[char] = ++arr1Object[char] || 1;
  }
  for (let char of arr2) {
    arr2Object[char] = ++arr2Object[char] || 1;
  }
  console.log(arr1Object);
  console.log(arr2Object);

  // check the matching value and frequency
  for (let char of arr1) {
    if (!arr2.includes(char ** 2)) return false;
    if (arr2Object[char ** 2] !== arr1Object[char]) return false;
  }
  return true;
}

console.log(isSame([1, 2, 3], [4, 1, 9]));
