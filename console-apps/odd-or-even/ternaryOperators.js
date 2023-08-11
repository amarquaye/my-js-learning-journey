// Simple console-based game to determine whether a number is odd or even.
// But this time i will be using ternary opeartors since i just watched a youtube tutorial on it
// since the main object of this repo is to show others my learning experience and progress 

// This code was written by Jesse Amarquaye in August, 2023 while learning the basiscs of javascript.


const input = require("prompt-sync")();

// Start of game 
console.log("Welcome to Odd or Even");
console.log("In this game you will enter a number and we'll see if it's odd or even.");
console.log("Now let's play!\n");

num = input("Enter a number: ");
even = "Your number is even!";
odd = "Your number is odd!";

let message = (num % 2 === 0) ? even : odd;
console.log(message);