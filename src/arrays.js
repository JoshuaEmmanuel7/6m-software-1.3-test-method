// Declaring an empty array
//let empty = [];

// Initializing array with default values
/*let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("default numbers are ", defaults);

// Retrieve the first element in array
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}
*/

/*Class discussion
Array methods:
Break out into groups and research how each of the array methods can be used and give an example.
    1. push
    2. pop
    3. shift
    4. unshift
    5. splice
    6. slice
*/

//Exercise:
/*
Question 1:
1. Create an array called "grades" with 5 numeric values
2. Use a for loop to loop through the array to get the average of the values.
Question 2:
1. Use array methods to combine the two arrays and remove all even-indexed values
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
*/

// Solution for question 1:
let grades = [15, 25, 35, 45, 55];
let sum = 0;
let ave ;

for(let i=0; i<grades.length; i++){
    sum +=  grades[i];
    //console.log(grades[i]);
    //console.log(sum);
} 
ave = sum / grades.length;
console.log(ave);

//solution for question 2:
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 == 0) {
  } else {
    arr3.push(arr1[i]);
  }
}
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 == 0) {
  } else {
    arr3.push(arr2[i]);
  }
}

console.log(arr3);


//Trial and error checking 2 
/*for(let i=0; i<arr1.length; i++){
    if(arr1[i] % 2 == 0){
        arr3.push(arr1[i]);
    }
}
for(let i=0; i<arr2.length; i++){
    if(arr2[i] % 2 == 0){
        arr3.push(arr2[i]);
    }
}
console.log(arr3);*/

//Trial and error checking 1
/*for(let i=0; i<arr1.length; i++){
        arr3.push(arr1[i]);
}
for(let i=0; i<arr2.length; i++){
    arr3.push(arr2[i]);
}

for(let i=0; i<arr3.length; i++){
    if(arr3[i] % 2 == 0){
    arr3.pop([i]);
}
}

console.log(arr3);*/
