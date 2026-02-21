document.getElementById("add-money-btn").addEventListener('click', function () {
    // console.log("button clicked");
    // 1: get bank account
    const bankAccount = getValueFromInput("add-money-bank");
    // console.log(bankAccount);
    if (bankAccount == "Select a Bank") {
        alert("Please Select a Bank");
        return;
    }

    // 2: get account number
    const accountNumber = getValueFromInput("add-money-number")
    if (accountNumber.length != 11) {
        alert("Invalid Account Number");
        return;
    }

    // 3: get amount 
    const addAmount = getValueFromInput("add-money-amount");

    const newBalance = getBalance() + Number(addAmount);
    console.log(newBalance);
    // verify the pin
    const pin = getValueFromInput("add-money-pin");
    if (pin == "1234") {
        alert(`add money successfull from ${bankAccount} as ${new Date()}`);
        setBalance(newBalance)
    } else {
        alert("Invalid Pin")
    }
})