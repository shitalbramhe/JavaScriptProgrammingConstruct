//1. Random Function to get Single Digit.
//console.log("Single digit number "+ Math.floor(Math.random() * 10));

//2. Use Random to get Dice Number between 1 to 6
//console.log("Dice Number" + Math.floor(1 + Math.random()*5));

//3. Add two Random Dice Number and Print the Result
//let sum = (Math.floor(Math.random() * 10)) + (Math.floor(Math.random()*10))
//console.log("Addition of two random numbers " +sum);

//4. Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
console.log("Enter five values");
let arr = new Array(5);
var readlineSync = require("readLine-sync");
 sum =0;
for(let i =0; i< arr.length; i++){
    arr[i] = readlineSync.questionInt();
    sum += arr[i];
}
let avg = sum/arr.length;
console.log("Total sum: "+sum);
console.log("Total average: "+avg);

