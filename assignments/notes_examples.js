
//EXAMPLE/TRANSLATION FROM MDN ::

const array1 = [1, 2, 3, 4];
const cb = (accumulator, currentValue) => accumulator + currentValue /*initial value here*/;  // this is a function, before using.reduce
//           parameter1,  parameter2      old value, last it.... 
//cb => "how to get from old value to new value"   "old state" to "new state"
//

//accumulator== value that changes as you iterate through

// 1 + 2 + 3 + 4
console.log(array1.reduce(cb));  // cb was called "reducer" and that was confusing AF while learning
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(cb, 5));
// expected output: 15