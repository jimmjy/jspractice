const myAccount = {
    name: 'James',
    expenses: 0,
    income: 0
};

const addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
    console.log(account);
};

const addIncome = function (account, amount) {
    account.income += amount;
};

const resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;
};

const getSummary = function (account) {
    return `Account for ${account.name} has balance of $${account.income - account.expenses}. $${account.income} income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 500);
console.log(getSummary(myAccount));
resetAccount(myAccount);
console.log(getSummary(myAccount));

