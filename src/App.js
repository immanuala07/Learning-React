import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => { // Arrow function

	let expense = [
		{ name: "Coffee Maker", amt: 199.00, date: new Date(2022, 5, 18) },
		{ name: "Fridge", amt: 12250.00, date: new Date(2019, 7, 12) },
		{ name: "Washing machine", amt: 150.00, date: new Date(2020, 5, 18) },
		{ name: "Grocery", amt: 250.00, date: new Date(2021, 2, 28) }
	];

	// Load the expense data with initial year as 2022 
	let initialExpenseData = expense.filter((item) => item.date.getFullYear().toString() == '2022');

	const [expenseData, filteredExpenseData] = useState(initialExpenseData);

	const addExpenseHandler = expense => {
		console.log('In App.js');
		console.log(expense);
	};

	const UpdatedYear = year => {
		// console.log('In App.js');
		// console.log(year);
		let expenseData = expense.filter((item) => item.date.getFullYear() == year);
		filteredExpenseData(expenseData);
	};

	return (
		<div>
			{/* Child to Parent communication is the function defined in parent component and added them to the child component as the property assigned to function variable.
			that function is acessed as props.componentPropertyName and it is called when associated action is done on the component */}
			{/* Parent component is below  and App.js is the parent component for NewExpense */}
			<NewExpense onAddExpense={addExpenseHandler} />

			{/* The below html property - expenseArray to access props in Expense.js */}
			<Expense onSelectedYear={UpdatedYear} items={expenseData} />
		</div>
	);

};

export default App;
