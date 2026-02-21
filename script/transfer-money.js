document.getElementById("transfer-money-btn").addEventListener("click", function () {
    checkValidation("transfer-money-number", "transfer-money-pin", "transfer-money-amount", "transfer-btn-p");
    const balance = getBalance();
    const amount = getValueFromInput("transfer-money-amount");
    const newBalance = balance - amount;
    setBalance(newBalance);
})