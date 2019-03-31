// Create a higher order function and invoke the callback function to test your work.

//You have been provided an example of a problem and a solution to see how this works with our items array.  
//Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//problem 1:     
//function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
//}
//higher order function using "cb" as the call back
  function getLength(arr, cb) {
    return cb(arr.length);
  }

//Functon invocation

getLength(items, function(getLength) {
  console.log(getLength);
} )                                                             // why close parenthesis here instead of next to getLenght parameters?
                                                                 //missing ) after "argument list"

//console.log(`this is a test of ${items.pop()}`);              
                                                                //array.pop() gets rid of last item, mutates the array, if you run it again,
                                                                //array[array.length-1]=== original_array[array.length-2]

//Problem 2:
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.pop());                                         //? Why cb invoked here when it is a parameter of this function?
}

last(items, function(last) {
  console.log(last);        
})                                                              // GUM.  again, why ) here. I place it after (items, functon(last)) {}   by default
                                                                // Because THE ENTIRE FUNCTION *is* THE ARGUMENT !!
//invocation 2

//PROBLEM 3

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

sumNums(3, 4, function(sumNums) {                               //function defined on 64, why am I retyping the entire thing as an argument??
  console.log(sumNums);
})


//PROBLEM 4

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

multiplyNums(400,50, function (multiplyNums) {
  console.log(multiplyNums);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return list.includes(item);
}

contains("Gum",items, function (contains) {
  console.log(contains);
})                                                              //NOTHING HAPPENING IN CONSOLE???

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
