// income
function income() {
    const totalIncome = document.getElementById('income').value;
    if (totalIncome > 0) {
        document.getElementById('error-Minusnumber').style.display = "none";
        document.getElementById('error-letter').style.display = "none";
        document.getElementById('error-text').style.display = "none";
    }
    else if (totalIncome < 0) {
        document.getElementById('error-Minusnumber').style.display = "block";
        document.getElementById('error-letter').style.display = "none";
        document.getElementById('error-text').style.display = "none";
    }
    else if (totalIncome != "number") {
        document.getElementById('error-letter').style.display = "block";
        document.getElementById('error-text').style.display = "none";
        document.getElementById('error-Minusnumber').style.display = "none";
    }
    else {
        document.getElementById('error-text').style.display = "block";
    }
    return parseInt(totalIncome);

}
// food
function food() {
    const foodInput = document.getElementById('food').value;
    if (foodInput >= 0) {
        document.getElementById('error-food').style.display = "none";
        document.getElementById('error-food-minas').style.display = "none";
        document.getElementById('error-food-string').style.display = "none";
    }
    else if (foodInput < 0) {
        document.getElementById('error-food-minas').style.display = "block";
        document.getElementById('error-food-string').style.display = "none";

    }
    else if (foodInput != "number") {
        document.getElementById('error-food-string').style.display = "block";
        document.getElementById('error-food-minas').style.display = "none";

    }

    return parseInt(foodInput);
}
// rent
function rent() {
    const rentInput = document.getElementById('rent').value;
    if (rentInput >= 0) {
        document.getElementById('error-rent').style.display = "none";
        document.getElementById('error-rent-minas').style.display = "none";
        document.getElementById('error-rent-string').style.display = "none";
    }
    else if (rentInput < 0) {
        document.getElementById('error-rent-minas').style.display = "block";
        document.getElementById('error-rent-string').style.display = "none";
    }
    else if (rentInput != "number") {
        document.getElementById('error-rent-string').style.display = "block";
        document.getElementById('error-rent-minas').style.display = "none";

    }

    return parseInt(rentInput);
}
// clothes
function clothes() {
    const clothesInput = document.getElementById('clothes').value;
    if (clothesInput >= 0) {
        document.getElementById('error-clothes').style.display = "none";
        document.getElementById('error-clothes-minas').style.display = "none";
        document.getElementById('error-clothes-string').style.display = "none";
        document.getElementById('error-expenses').style.display = "none";
    }
    else if (clothesInput < 0) {
        document.getElementById('error-clothes-minas').style.display = "block";
        document.getElementById('error-clothes-string').style.display = "none";
    }
    else if (clothesInput != "number") {
        document.getElementById('error-clothes-string').style.display = "block";
        document.getElementById('error-clothes-minas').style.display = "none";
    }

    return parseInt(clothesInput);
}

// Total Expenses
function expenses() {
    totalExpenses = food() + rent() + clothes();
    return totalExpenses;
}

// Balance
function netIncome() {
    balance = income() - expenses();
    if (income() > expenses()) {
        document.getElementById('error-balance').style.display = "none";
        document.getElementById('error-balance-value').style.display = "none";
    }
    else if (income() < expenses()) {
        document.getElementById('error-balance').style.display = "block";
        document.getElementById('error-balance-value').style.display = "none";

    }
    else {
        document.getElementById('error-balance-value').style.display = "block";
        balance = 0;
    }

    return balance;
}

// calculate btn click function
document.getElementById('calculate').addEventListener("click", function () {
    document.getElementById('balance').innerText = netIncome();
    if (income() < expenses()) {
        document.getElementById('error-expenses-income').style.display = "block";
        document.getElementById('total-expenses').innerText = '';

    }
    else if (income() > expenses()) {
        document.getElementById('total-expenses').innerText = expenses();
        document.getElementById('error-expenses-income').style.display = "none";
    }
    else {
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('error-expenses-income').style.display = "none";
    }
})

// Saveing % function
function saveing() {
    const savingInput = document.getElementById('saving').value;
    const saving = savingInput / 100;
    return saving;
}

// saveAmount function
function saveAmount() {
    const saveOutput = income() * saveing();
    return saveOutput.toFixed(2);
}

// remainingBalance function
function remainingBalance() {
    if (netIncome() > saveAmount()) {
        remainingBalanceOutput = netIncome() - saveAmount();
        document.getElementById('error-remaining-balance').style.display = "none";
    }
    else {
        document.getElementById('error-remaining-balance').style.display = "block";
        remainingBalanceOutput = "";
    }
    return remainingBalanceOutput;
}

// save btn click function
document.getElementById('save').addEventListener("click", function () {
    // remainingBalance
    document.getElementById('remaining-balance').innerText = remainingBalance();
    // saveAmount 
    if (netIncome() < saveAmount()) {
        document.getElementById('error-saving-amount').style.display = "block";
        document.getElementById('save-amount').innerText = '';
    }
    else {
        document.getElementById('save-amount').innerText = saveAmount();
        document.getElementById('error-saving-amount').style.display = "none";
    }
})
