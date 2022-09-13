var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array[7]);              // get value by index
console.log("Array Before: ");
console.log(array);                 // full array print
array[5] = 10;                      // set value by index
console.log("Array After: ");
console.log(array);                 // full array print after set value by index
console.log(array.indexOf(8));      // finding the index of value 8
console.log(array.indexOf(50));     // finding the index of non-existing value. this will return value -1.