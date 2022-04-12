let arr = [1, 1, 1, 2, 3, 3, 1];
function dupl(array) {
  let newArr = [array[0]];
  let k = 0;
  let result = [];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < newArr.length; j++) {
      if (newArr[j] === array[i]) {
        k++;
      } else {
        newArr.push(array[i]);
      }
      result.push(k);
    }
  }
  return newArr;
}
console.log(dupl(arr));
// Array.prototype.fakeMap = function (cb) {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(cb(this[i], i, this));
//   }
//   return newArray;
// };
// let arr = [1, 2, 3];
// console.log(arr.fakeMap((item) => item + 1));

// Array.prototype.fakeFilter = function (cb) {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// };

// console.log(arr.fakeFilter((item) => item > 1));

// Array.prototype.fakeReduce = function (cb, initialValue) {
//   let agg = initialValue || this[0];
//   initialValue !== undefined ? 0 : 1;
//   for (let i = 0; i < this.length; i++) {
//     agg = cb(agg, this[i], i, this);
//   }
//   return agg;
// };
