document.getElementById("pay-bill-btn").addEventListener('click', function () {
    checkValidation("pay-bill-number", "Pay-bill-pin", "pay-bill-amount", "pay-bill-btn-p");
    const balance = getBalance();
    const amount = getValueFromInput("transfer-money-amount");
    const newBalance = balance - amount;
    setBalance(newBalance);
})