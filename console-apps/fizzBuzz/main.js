// Program to emulate fizzBuzz
// Written by Jesse Amarquaye in August, 2023

const input = require("prompt-sync")()

console.log("Welcome to FizzBuzz by Jesse Amarquaye (:");

let num = parseInt(input("Enter a number: "));

if (num % 3 ===0 && num % 5 === 0){
    console.log("FizzBuzz");
}
else if (num % 3 === 0){
    console.log("Fizz");
}
else if (num % 5 === 0){
    console.log("Buzz");
}
else{
    console.error("Failed\nYour number %d is not divisible by either 3 or 5!", num);
}
