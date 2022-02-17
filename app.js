// Total Expenses
const food = document.getElementById('food').value;
const rent = document.getElementById('rent').value;
const clothes = document.getElementById('clothes').value;
function expenses(food, rent, clothes) {
    totalExpenses = food + rent + clothes;
    return totalExpenses;
}
console.log(expenses(food, rent, clothes))