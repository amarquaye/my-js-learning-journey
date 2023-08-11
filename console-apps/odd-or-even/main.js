// Simple console-based game to determine whether a number is odd or even.
// This code was written by Jesse Amarquaye in August, 2023 while learning the basiscs of javascript. 

const input = require("prompt-sync")();

// Start of game 
console.log("Welcome to Odd or Even");
console.log("In this game you will enter a number and we'll see if it's odd or even.");
console.log("Now let's play!\n");

num = input("Enter a number: ");
console.log(num);

if (num % 2 === 0){
    console.log("Your number %d is even!", num);
}
else if (num % 2 !== 0){
    console.log("Your number, %d is odd!", num);
}
else{
    console.log("Please enter anumber!");
}