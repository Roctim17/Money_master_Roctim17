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
    return totalIncome
}
// Total Expenses
function expenses() {
    const food = parseInt(document.getElementById('food').value)
    const rent = parseInt(document.getElementById('rent').value)
    const clothes = parseInt(document.getElementById('clothes').value)
    totalExpenses = food + rent + clothes;

    return totalExpenses;
}
// Balance
function netIncome() {
    const balance = income() - expenses();
    if (income() > expenses()) {

    }
    else {
        document.getElementById('error-balance').style.display = "block";
    }
    return balance;
}

// calculate click function
document.getElementById('calculate').addEventListener("click", function () {
    document.getElementById('total-expenses').innerText = expenses();
    document.getElementById('balance').innerText = netIncome();
    console.log(income());
})
// save click function
document.getElementById('save').addEventListener("click", function () {
    const saving = document.getElementById('saving').value;
    const saveAmount = income() * saving / 100;
    document.getElementById('save-amount').innerText = saveAmount;
    const remainingBalance = netIncome() - saveAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;

})
