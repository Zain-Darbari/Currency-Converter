#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\tWellcome to 'Zain Darbari' - Currency Converter\n"));
// define the list of currencies and their exchangr rates
let exchange_Rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70, //Pakistani Rupees
    // Add more currencies and thier exchange rates here
};
// Prompt the user to select the currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the Currency to convert from: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
// Perform Currency  convertion by using Formula
let from_Amount = exchange_Rate[user_answer.from_currency];
let to_Amount = exchange_Rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of Convertion
let base_amount = amount / from_Amount;
let converted_Amount = base_amount * to_Amount;
// Display the convrted amount 
console.log(`Converted Amount = ${chalk.green(converted_Amount.toFixed(2))}`);
