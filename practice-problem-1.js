var fruits = ['Apple', 'Banana', 'Orange'];     // fruits array declare
console.log(fruits);        // array print
var indexValue = fruits.indexOf('Banana');      // finding index of Banana
console.log(indexValue);    // print the index of Banana
fruits[indexValue] = 'Mango';           // replacing Banana with Mango using index value of Banana
console.log(fruits);        // array print after replacement
fruits.pop();       // removing last index element
console.log(fruits);    // array print after removing last element
fruits.push('Watermelon');  // inserting new element to the last index
console.log(fruits);    // array print after new element insertion
