import React from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => { // Arrow function

	let expense = [
		{ name: "Grocery", amt: 250.00, date: new Date(2021, 2, 28) },
		{ name: "Fridge", amt: 12250.00, date: new Date(2019, 7, 12) },
		{ name: "Washing machine", amt: 150.00, date: new Date(2020, 5, 18) }
	];

	const addExpenseHandler = expense => {
		console.log('In App.js');
		console.log(expense);
	}

	return (
		<div>
			{/* Child to Parent communication is the function defined in child component and added them to the parent component as the property assigned to function variable.
			that function is acessed as props.componentPropertyName and it is called when associated action is done on the component */}
			{/* Parent component is below  and App.js is the parent component for NewExpense */}
			<NewExpense onAddExpense={addExpenseHandler} />

			{/* The below html property - expenseArray to access props in Expense.js */}
			<Expense items={expense} />
		</div>
	);

};

export default App;
