// Program to check the eligibility of an individual during an election.
// This program was created by Jesse Amarquaye in August, 2023.

const input = require("prompt-sync")()

console.log("Welcome to the Election Hub by Jesse Amarquaye (: ");
let name = input("Enter your name: ");
let age = input("Enter your age: ");
let nationality = input("Are you a Ghanaian?...Enter 'y' for yes and 'n' or any character for no: ");

// Check whether the user is eligible
if (age >= 18 && nationality === "y"){
    console.log("You are at least 18 years years old and a Ghanaian so you can vote.");
}
else{
    console.log("Sorry %s, you cannot be allowed to vote!", name);
}