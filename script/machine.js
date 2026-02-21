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
}