// -BASIC INFORMATION - see examples below for more detail 
//? ARRAY
// /push() adds to the end of an array 
// .unshift() adds to the beginning of an array
// .pop() removes end item of an array
// .shift() removes first item of an array

//? Objects
// Object.key --> pulling that item from the object 
// object.new_key = contents --> This adds a new Key pair to the object
//MERGING OBJECTS
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
//let mergedObj = Object.assign({}, obj1, obj2); --> // console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
// let mergedObjSpread = { ...obj1, ...obj2 }; --> console.log(mergedObjSpread); // Output: { a: 1, b: 2, c: 3, d: 4 }


//? LOOPS
// for (i=0; i>arr.length; i++){}
// while (argument = true){}
// const new_arr = arr.map((current_selected_item_in_arr, idx)=>{})
// arr.foreach((current_selected_item_in_arr, idx)=>{})




//$ array manipulation
// EXAMPLE ARRAYS
const exArray = [1, 2, 3, 4, 5];
const exArray2 = ["a", "b", "c"];

// ! PUSH
// push(): Adds one or more elements to the end of an array.

// Does not make a new array by default
exArray.push("e");
console.log(exArray); // [1, 2, 3, 4, 5, "e"]

// Combine 2 arrays
exArray.push(exArray2);
console.log(exArray); // [1, 2, 3, 4, 5, "a", "b", "c"]

//! POP
//removes the last item in an array

exArray.pop(); //[1, 2, 3, 4]

//When called it takes on the property of the removed item
console.log(exArray.pop()); // 5

//can be used to set the removed object into a valueoutside of an array
const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'

//! SHIFT
//opposite of POP removes the first item from an array

exArray.shift(); // [2, 3, 4, 5]

// $ Loops

//! For

for (i = 1; 1 < exArray.length; i++) {
  //do this things for every item in the array
}

//! WHILE
while (whatever_you_want_to_be_true) {
  //this action will go until the value above changes to be false.

  if (numberImLookingFor === 10) {
    break;
    //this breaks the loop even if the while variable its looking for never actualy became false
    continue;
    //this continues the loop
  }
}

//! MAP
//.map() can returns an array so you can manipulate an array with .map()

//! FOREACH
// .foreach() Does not return an array. 
//it ONLY does an action for each item in the array
//This is why .foreach() is used in react because no array is needed just an actiion for each item
