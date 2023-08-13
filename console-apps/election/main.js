// Program to check the eligibility of an individual during an election.
// This program was created by Jesse Amarquaye in August, 2023.

const input = require("prompt-sync")()

console.log("Welcome to the Election Hub by Jesse Amarquaye (: ");
let name = input("Enter your name: ");
let age = input("Enter your age: ");

// console.log("Your name is %s and age is %d years.", name, age);

if (age >= 18){
    console.log("You are at least 18 years years old so you can vote.");
}
else{
    console.log("Sorry %s, you cannot be allowed to vote!", name);
}