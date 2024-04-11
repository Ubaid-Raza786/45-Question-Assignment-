import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 7887;
let pinAnswer = await inquirer.prompt({
    name: "Q1",
    type: "number",
    message: "Enter Your Pin",
});
if (pinAnswer.Q1 === myPin) {
    console.log("Correct Pin Code.");
    // withdraw,check balance
    let operationAnswer = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "Please Select Option,",
            choices: ["Withdraw", "Check Balance", "Past Cash"],
        }]);
    //withdraw amount
    if (operationAnswer.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter your Withdraw amount",
            }]);
        //subtraction
        myBalance -= amountAnswer.amount;
        console.log(`Your remaining Balance is : ${myBalance}`);
        // Check Balance 
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your Current Balance is : ${myBalance}`);
        // Past cash
    }
    else if (operationAnswer.operation === "Past Cash") {
        let pastCashAmount = await inquirer.prompt([{
                name: "pastCash",
                type: "list",
                message: "Select Your Past Cash Amount,",
                choices: ["1000", "2000", "5000", "10000"]
            }]);
        if (pastCashAmount.pastCash === "1000", "2000", "5000", "10000") {
            console.log(`Your remaining Balance is : ${myBalance -= pastCashAmount.pastCash}`);
        }
    }
}
else {
    console.log("Incorrect Pin Code.");
}
;
