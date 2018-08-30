const account = {
    name: 'Jay Fink',
    expenses: [],
    income: [],
    addExpense: function(description, cost) {
        const expense = {
            description: description,
            amount: cost
        };
        this.expenses.push(expense);
    },
    addIncome: function (description, amount) {
        const income = {
            description: description,
            amount: amount
        };

        this.income.push(income);
    },
    getAccountSummary: function() {
        //calculate income
        let totalIncome = 0;
        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount;
        });

        //calcualte expenses
        let totalExpenses = 0;
        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount;
        });

        const accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`;
    }
};

//challenge part 1
// Expense object to push to expenses -> description (coffee at capital), amount -> how much spent
// methods:
// addExpense -> two arguments, (description, amount) add new object to expenses array
// getSummary -> no arguments, total up all expenses, print message
// (account name) has (total have to calculate) eg. in expenses

// challenge part 2
// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. tweak getAccountSummary -> (name) has a balance of (balance). (amountIncome) in income. (amount) in expenses
account.addExpense('coffee', 2);
account.addIncome('freelance', 3000);
account.addExpense('rent', 900);
account.addExpense('cable', 58);
account.addIncome('job', 1000);
console.log(account.getAccountSummary());

// account.addExpense('Rent', 950);
// account.addExpense('Coffee', 2);
// console.log(getSummary());