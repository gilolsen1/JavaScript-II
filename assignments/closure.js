// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

//Closure is the environment of what a function has access to.

// const crab1= "hermit"     //global
// const crab2= "blueClaw"   //global

// function crabTrap= (lunch, dinner)  {
//   const crab3= `I eat ${lunch} and ${dinner}`
// }

// console.log(crabTrap(crab1,crab2));

// console.log(crab3);  // this won't work because it's in the function scope


x=35;

function add(y) {
  return x+y;
}

console.log(2,3); 

function add(x) {
  return function(y) {
    return x+y;
  };
}

const add5 = add(5);      //sets value of x to 5 
const result= add5(6);    
//11



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function  ( return ()=> {}) that when invoked increments and returns a current count.
  let count=0;

  return ()=> { 
    count ++;
      return count;
  }
};
// Example usage: 

const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
