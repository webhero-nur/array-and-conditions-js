console.log("#######################################################################################################################################")
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array before new value insertion: ");
console.log(array);
array.push(50);             // inserting value 50 to the end using push() function
console.log("Array after new value insertion in the end using push() function: ");
console.log(array);
var popElement = array.pop();   // removing the last value using pop() function and it will be stored in the new variable
console.log("Array after last value remove using pop() function: ");
console.log(array);
console.log("Pop Element: ")
console.log(popElement);
var shiftElement = array.shift();   // removing the first value using shift() function and it will be stored in the new variable
console.log("Array after removing first element: ");
console.log(array);
console.log("Shift Element: ")
console.log(shiftElement);
array.unshift(20);      // inserting value 20 to the begining of the array using unshift() function
console.log("Array after adding value in the beginning: ");
console.log(array);