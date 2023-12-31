// Program to emulate the mobile money interface popularly know as momo in Ghana. 
// In this program i will be using the switch case in javascript to achieve my goal. 
// Created by Jesse Amarquaye in August, 2023. 

const input = require("prompt-sync")();

const PIN = 1234;

console.log("Menu");
console.log("1) Transfer Money");
console.log("2) MoMoPay & Pay Bill");
console.log("3) Airtime & Bundles");
console.log("4) Allow Cash Out");
console.log("5) Financial Services");
console.log("6) My Wallet\n");

// Take user input 
let num = parseInt(input("Reply: "));

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
        // break;

        let transferMoneyReply = parseInt(input("Reply: "));

        // Options under MoMo User
        switch (transferMoneyReply){

            // MoMO User 
            case 1:
                let recipientNumber = parseInt(input("Enter mobile number: "));
                let recipientNumber2 = parseInt(input("Confirm Number: "));

                // Checking if both numbers are the same 
                if (recipientNumber === recipientNumber2){
                    let amount = parseFloat(input("Enter Amount: "));
                    let ref = input("Enter Reference: ");

                    let fee = 0.00;
                    let taxAmount = 0.00;
                    let totalAmount = 0.00;

                    if (amount <= 50){
                        fee = 0.00
                    } 
                    else{
                        fee = 0.01 * amount
                    }
                    
                    taxAmount = 0.01 * amount;
                    totalAmount = parseFloat(amount) + parseFloat(fee) + parseFloat(taxAmount);
            
                    console.log("\nTransfer to %d for GHS %f with Reference: %s", recipientNumber, amount, ref);
                    console.log("Fee is GHS %f", fee);
                    console.log("Tax amount is GHS %f", taxAmount);
                    console.log("Total Amount is GHS %f", totalAmount);

                    let enterPin = parseInt(input("Enter MM PIN or 2 to cancel: "));

                    if (enterPin == PIN){
                        console.log("\nYou have sent %d to %d", amount, recipientNumber);
                        console.log("Thanks for using momo by Jesse Amarquaye");
                    }
                    else{
                        console.error("Incorrect PIN!");
                    }
                    break;
                }
                else{
                    console.log("\nNumber Mismatch!");
                    break;
                }
            
            // Non MOMO User     
            case 2:
                let recipientName = input("Enter receiver name: ");
                amount = input("Enter amount: ");
                ref = input("Enter Reference: ");
                let secretCode = input("Enter Secret Code: ");
                break;
                // To be continued later 
            
            // Send with care 
            case 3:
                console.log("\nSend With Care.");
                console.log("1) Mobile User");
                console.log("2) MyCaretaker");
                console.log("3) AYO Send with Care Balances or claim");
                console.log("0) Back");
                break;
                // To becontinued later 

            case 4:
                console.log("\nFavorite");
                console.log("1) Name");
                console.log("2) Find");
                console.log("0) Back");
                break;
                // To be continued later 

            // Other Networks 
            case 5:
                console.log("\nTransfer Money to Other Networks.");
                console.log("1) AirtelTigo");
                console.log("2) Vodafone");
                console.log("3) E-zwich");
                console.log("4) G-Money");
                console.log("5) ZeePay");
                console.log("6) GhanaPay");
                console.log("0) Back");
                break;
                // To be continued later 

            // Bank Account 
            case 6:
                console.log("\nGHIPSS Banks transfer service");
                console.log("1) Wallet to Bank Account");
                console.log("0) Back");
                break;
                // To be continued later 

            default:
                console.error("Please enter a valid number!");
        }
        break;

    // MoMoPay 
    case 2:
        console.log("\nMoMoPay & PayBill");
        console.log("1) MoMoPay");
        console.log("2) Pay Bill");
        console.log("3) GhQR");
        console.log("4) Back");
        // break;

        let momopayReply = input("Reply: ");
        momopayReply = parseInt(momopayReply);

        switch (momopayReply){
            case 1:
                let merchantId = input("Enter Merchant id/Payment Reference: ");
                break;
                // To be continued later 
        }
        break;

    // Airtime & Bundles 
    case 3:
        console.log("\nAirtime & Bundles");
        console.log("1) Airtime");
        console.log("2) Internet Bundles");
        console.log("3) Fixed Broadband");
        console.log("4) Schedule Airtime");
        console.log("5) Just4U");
        console.log("0) Back");
        break;
        // To be continued later 

    // Allow Cash Out 
    case 4:
        console.log("\nAllow Cash Out");
        console.log("1) Yes");
        console.log("2) No");
        console.log("0) Back");

        let allowCashOutReply = parseInt(input("Reply: "));

        switch (allowCashOutReply){
            case 1:
                console.log("\nCash out is Allowed");
                break;

            case 2:
                console.log("\nCash out is not Allowed");
                break;

            default:
                console.error("Error, your response %d is not part of the options!", allowCashOutReply);
        }
        break;

    // Financial Services 
    case 5:
        console.log("\nFinancial Services");
        console.log("1) Bank Services");
        console.log("2) Savings");
        console.log("3) Loans");
        console.log("4) Pensions and Investments");
        console.log("5) Insurance");
        console.log("6) Trade Shares");
        console.log("0) Back");
        break;

    // My Wallet 
    case 6:
        console.log("\nMy Wallet");
        console.log("1) Check Balance");
        console.log("2) Allow Cash Out");
        console.log("3) My Approvals");
        console.log("4) Report Fraud");
        console.log("5) Statements");
        console.log("6) Change & Reset PIN");
        // break;

        let myWalletReply = parseInt(input("Reply: "));

        switch (myWalletReply){
            case 1:
                let checkBalanceReply = parseInt(input("Fee is GHS 0.00. Enter MM PIN: "));

                if (checkBalanceReply == PIN){
                    console.log("\nCurrent Balance: GHS 0.00");
                    console.log("Available Balance: GHS 0.00");
                    break;
                }

                break;

            default:
                console.error("Error, your response %d is not part of the options!", myWalletReply);
        }
        break;

    default:
        console.error("Error, your response %d is not part of the options!", num);
}