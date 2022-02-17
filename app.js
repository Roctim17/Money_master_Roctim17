// income
function income() {
    const totalIncome = parseInt(document.getElementById('income').value)
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
    return balance;
}
// calculate click function
document.getElementById('calculate').addEventListener("click", function () {
    document.getElementById('total-expenses').innerText = expenses();
    document.getElementById('balance').innerText = netIncome();
})
// save click function
document.getElementById('save').addEventListener("click", function () {
    const saving = document.getElementById('saving').value;
    const saveAmount = income() * saving / 100;
    document.getElementById('save-amount').innerText = saveAmount;
    const remainingBalance = netIncome() - saveAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;

})
