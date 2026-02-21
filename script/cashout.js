document.getElementById("cashout-btn").addEventListener("click", function () {
    // 1: get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");
    console.log(cashoutNumber);
    if (cashoutNumber.length != 11) {
        alert("Invalid Agent Number");
        return;
    }

     // 2: get the amount, validate, convert to number
    const cashoutAmount = getValueFromInput("cashout-amount");

    // 3: get the current balance, validate, convert to number
    console.log(cashoutAmount);
    const cashoutPin = getValueFromInput("cashout-pin");
    console.log(cashoutPin);

    // 3: get the current balance, validate, convert to number
    const balance = getBalance();
    console.log(balance);

    // 4: calculate new balance
    const newBalance = balance - Number(cashoutAmount);
    console.log(newBalance)
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    // 5: Get the pin and verify
    if (cashoutPin == "1234") {
        alert("cashout successful");
        setBalance(newBalance)
    } else {
        // 5-2 : False::: show an error> return 
        alert("Invalid pin");
    }
})


// document.getElementById("cashout-btn").addEventListener('click', function () {
    // 1: get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !=11 ){
//         alert("Invalid Agent Number");
//         return;
//     }

//     // 2: get the amount, validate, convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3: get the current balance, validate, convert to number
//     const balanceElement = document.getElementById("balance");
//     const currentBalance = balanceElement.innerText;
//     console.log(currentBalance);

//     // 4: calculate new balance
//     const newBalance = Number(currentBalance) - Number(cashoutAmount);
//     console.log(newBalance);
//     if (newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }

//     // 5: Get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const cashoutPin = cashoutPinInput.value;
//         if (cashoutPin === "1234") {
//             // 5-1 : true::: show an alert> set balance 
//             alert("cashout successful");
//             console.log(newBalance);
//             balanceElement.innerText= newBalance
//     } else{// 5-2 : False::: show an error> return 
//             alert("Invalid pin");
//             return;
//     }
// })