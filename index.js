// EXAMPLE 1 - Check if all Values in an Array are True in JavaScript

function allAreTrue(arr) {
  return arr.every(element => element === true);
}

console.log(allAreTrue([true, true])); // 👉️ true
console.log(allAreTrue([true, false])); // 👉️ false

if (allAreTrue([true, true])) {
  // 👇️ this runs
  console.log('All values are true');
} else {
  console.log('NOT all values are true');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Checking if all values in an array are `null`

// function allAreNull(arr) {
//   return arr.every(element => element === null);
// }

// console.log(allAreNull([null, null])); // 👉️ true
// console.log(allAreNull([null, undefined])); // 👉️ false

// if (allAreNull([null, null, null])) {
//   console.log('All values are equal to null');
// } else {
//   console.log('Not all values are equal to null');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if all values in an array are Truthy in JavaScript

// function allAreTruthy(arr) {
//   return arr.every(element => element);
// }

// console.log(allAreTruthy([1, 'test', true])); // 👉️ true
// console.log(allAreTruthy([0, '', true])); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if all Values in an Array are False in JavaScript

// function allAreFalse(arr) {
//   return arr.every(element => element === false);
// }

// console.log(allAreFalse([false, false])); // 👉️ true
// console.log(allAreFalse([false, true])); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if all Values in an Array are Falsy in JavaScript

// function allAreFalsy(arr) {
//   return arr.every(element => !element);
// }

// console.log(allAreFalsy([0, '', false])); // true
// console.log(allAreFalsy([1, 'test', true])); // false
