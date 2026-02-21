console.log("machine added");

// machine 1:  id =>input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    //  console.log(value)
    return value;
   
}

// machine 2: => balance
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("current balance", balance);
    return Number(balance);
}

// machine 3: => set Balance 
function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
    return Number(value)
}

// machine 4: show only selected and hide others
function showOnlySelected(id) {
    console.log("show only selected")
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");

    // console.log(`add Money: ${addMoney} , cashout: ${cashout}`);

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}

// machine 5: transfer money, payBill
function checkValidation(numberId, pinId, amountId, buttonPId) {
    const number = getValueFromInput(numberId);
    if (number.length != 11) {
        alert("Invalid Number");
        return;
    } 
    console.log(number);

    const amount = Number(getValueFromInput(amountId));
    const balance = getBalance();
    if (amount > balance) {
        alert("Invalid Amount");
        return;
    }
    console.log(amount)
    
    const buttonText = document.getElementById(buttonPId).innerText;
    const pin = getValueFromInput(pinId);
    if (pin == "1234") {
        alert(`${buttonText} successful at ${new Date()}`);
    } else {
        alert("Invalid pin");
        return;
    }
}