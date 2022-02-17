
// Total Expenses

function expenses() {
    const food = parseInt(document.getElementById('food').value)
    const rent = parseInt(document.getElementById('rent').value)
    const clothes = parseInt(document.getElementById('clothes').value)

    totalExpenses = food + rent + clothes;
    return totalExpenses;
}
// calculate click function
document.getElementById('calculate').addEventListener("click", function () {
    const income = parseInt(document.getElementById('income').value)
    const netIncome = income - expenses();
    document.getElementById('total-expenses').innerText = expenses();
    document.getElementById('balance').innerText = netIncome;


    console.log("expenses(food, rent, clothes)");
    console.log(income);
    console.log(expenses());
    console.log(netIncome);


})
// save click function

