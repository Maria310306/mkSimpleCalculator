#! /usr/bin/env node
import inquirer from "inquirer";
const Answer = await inquirer.prompt([
    { message: "Enter firstInteger", type: "number", name: "firstInteger" },
    { message: "Enter secondInteger", type: "number", name: "secondInteger" },
    {
        message: "Select one of the opertaors to perform an Operation",
        type: "list", name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
// Conditional Statements
if (Answer.operator === "Addition") {
    console.log(Answer.firstInteger + Answer.secondInteger);
}
else if (Answer.operator === "Subtraction") {
    console.log(Answer.firstInteger - Answer.secondInteger);
}
else if (Answer.operator === "Multiplication") {
    console.log(Answer.firstInteger * Answer.secondInteger);
}
else if (Answer.operator === "Division") {
    console.log(Answer.firstInteger / Answer.secondInteger);
}
else
    ("Please enter a valid Integer");
