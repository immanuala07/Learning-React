import React from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => { // Arrow function

	let expense = [
		{ name: "Grocery", amt: 250.00, date: new Date(2021, 2, 28) },
		{ name: "Fridge", amt: 12250.00, date: new Date(2019, 7, 12) },
		{ name: "Washing machine", amt: 150.00, date: new Date(2020, 5, 18) }
	];

	return (
		<div>
			<NewExpense />
			{/* The below html property - expenseArray to access props in Expense.js */}
			<Expense items={expense} />
		</div>
	);

};

export default App;
