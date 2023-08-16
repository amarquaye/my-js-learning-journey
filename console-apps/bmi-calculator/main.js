// Simple program to calculate the body mass index of an individual.
// A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9.
// BMI applies to most adults 18-65 years, but it is not used for muscle builders, long distance athletes, pregnant women, the elderly, or young children.
// BMI does not take into account whether the weight is carried as muscle or fat, just the number.
// Healthcare providers use BMI and other tools and tests to assess someone's health status and risks.

// Created by Jesse Amarquaye in August, 2023.

const input = require("prompt-sync")()

let mass = input("Enter your mass in kilograms: ");
parseFloat(mass);

height = input("Enter your height in meters: ");
parseFloat(height);

let bmi = mass / (height * height);
parseFloat(bmi);

console.log("\nYour Body Mass Index(BMI) is %f", bmi);
if (bmi < 18.5){
    console.log("You are underweight.");
}
else if (bmi >= 18.5 && bmi < 25){
    console.log("You are healthy.");
}
else{
    console.log("You are overweight.");
}
