// JavaScript console game to emulate a quiz and test my knowledge on the language.
// Created by Jesse Amarquaye in August 2023

const input = require("prompt-sync")()

// Declare score and set to 0 as it the begining
correctAnswers = 0

// Begining of quiz
const q1 = input("What is the capital of France?: ")
q1Answer = "paris"
if (q1.toLowerCase() === q1Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is Paris.\n")}

const q2 = input("What is the capital of Ghana?: ")
q2Answer = "accra"
if (q2 === q2Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is Accra.\n")}

const q3 = input("What is the largest planet in our solar system?: ")
q3Answer = "jupiter"
if (q3.toLowerCase() === q3Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is Jupiter.\n")}

const q4 = input("Who painted the Mona Lisa?: ")
q4Answer = "leonardo da vinci"
if (q4.toLowerCase() === q4Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is Leonardo Da Vinci.\n")}

const q5 = input("What is the symbol for the chemical element oxygen?: ")
q5Answer = "o"
if (q5.toLowerCase() === q5Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is O.\n")}

const q6 = input("Which famous scientist developed the theory of general relativity?: ")
q6Answer = "albert einstein"
if (q6.toLowerCase() === q6Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is Albert Einstein.\n")}

const q7 = input("What is the primary language spoken in Japan?: ")
q7Answer = "japanese"
if (q7.toLowerCase() === q7Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is Japanese.\n")}

const q8 = input("What is the process by which plants make their own food using sunlight?:")
q8Answer = "photosynthesis"
if (q8.toLowerCase() === q8Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is Photosynthesis.\n")}

const q9 = input("Which planet is known as the 'Red Planet'?: ")
q9Answer = "mars"
if (q9.toLowerCase() === q9Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is Mars.\n")}

const q10 = input("What is the capital of England: ")
q10Answer = "london"
if (q10.toLowerCase() === q10Answer){
    console.log("You had it correct\n")
    correctAnswers++

} else {console.log("That's incorrect, the right answer is London.\n")}
// End of quiz

// Display score 
console.log("\nYou had %d answers correct.", correctAnswers)

percentage = (correctAnswers / 10) * 100

console.log("Your score is " + percentage + '%')
