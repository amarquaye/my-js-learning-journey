const input = require("prompt-sync")();

generatedNumber = Math.floor(Math.random() * 10);

console.log("Welcome to Guess Me by Jesse Amarquaye");
console.log("Enjoy this simple game!")
console.log("I am a number between 0 and 11... guess me");

console.log(generatedNumber);

userNumber = input("Enter number: ");

if (userNumber === generatedNumber){
    console.log("You had it right");
} 
else if (userNumber > generatedNumber){
    console.log("Incorrect, enter a smaller number (: ");
}
else if (userNumber < generatedNumber){
    console.log("Incorrect, enter a larger number");
}
else{
    console.log("Incorrect number!");
}
