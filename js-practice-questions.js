// Create an object which will have a date key,
let objectDate = {
  dateKey: new Date("December 17, 1997"),
  name: `Lusine`,
};
//console.log(objectDate.name + ` is born at` + objectDate.dateKey);

// Return the sum of all arguments passed to function.
function f(a, b, c, d) {
  let allArguments = [...arguments];
  let sum = 0;
  allArguments.forEach((ar) => {
    sum += ar;
  });
  return sum;
}
//console.log(f(1, 2, 3, 4, 5));

// Create function that will return all the most repeated element.
let array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
function a(arr1) {
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
      if (arr1[i] == arr1[j]) m++;
      if (mf < m) {
        mf = m;
        item = arr1[i];
      }
    }
    m = 0;
  }
  return item;
}

console.log(a(array));

// Write a function which will remove all repeated items of array.

function removeDuplicates(array) {
  let res = [array[0]];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (res.indexOf(array[i]) === -1) {
        res.push(array[i]);
      }
    }
  }
  return res;
}

// console.log(removeDuplicates([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(StringValue) {
  let arrayOfWords = StringValue.split(" ");
  let maxLetters = 0;
  for (let i = 0; i < arrayOfWords.length; i++) {
    arrayOfWords[i] = arrayOfWords[i].length;
  }
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i] > maxLetters) {
      maxLetters = arrayOfWords[i];
    }
  }
  let answer = StringValue.split(" ")[arrayOfWords.indexOf(maxLetters)];
  return answer;
}
// console.log(longestWord("Web Development Tutorial"));

// Write a JS function, which will work as a calculator.
class Calculator {
  constructor(a, b) {
    this.add = a + b;
    this.min = a - b;
    this.sub = a * b;
    this.div = a / b;
  }
}
let calc = new Calculator(1, 2);
// console.log(calc.div);
