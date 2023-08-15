// Program to emulate the mobile money interface popularly know as momo in Ghana. 
// In this program i will be using te switch case in javascript to achieve my global. 
// Created by Jesse Amarquaye in August, 2023. 

const input = require("prompt-sync")();

console.log("Menu");
console.log("1) Transfer Money");
console.log("2) MoMoPay & Pay Bill");
console.log("3) Airtime & Bundles");
console.log("4) Allow Cash Out");
console.log("5) Financial Services");
console.log("6) My Wallet\n");

// Take user input 
let num = input("Enter response: ");
num = parseInt(num);

// Initial switch statements

switch (num){
    case 1:
        console.log("\nTransfer Money");
        console.log("1) MoMo User");
        console.log("2) Non MoMo User");
        console.log("3) Send with Care");
        console.log("4) Favorite");
        console.log("5) Other Networks");
        console.log("6) Bank Account");
        console.log("0) Back\n");
        break;

    default:
        console.error("Error, your response %d is not part of the options!", num);
}