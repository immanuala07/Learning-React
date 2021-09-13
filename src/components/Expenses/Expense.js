import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expense.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {

	// Setting the deafult value to dropdown filter by value as 2021
	const [filteredYear, setFilteredYear] = useState('2021');

	// This function filters the expensedata and returns the expense data according to the selected year or the initial year.
	let filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

	const filterStatus = year => {
		// By calling the below function - Expense compoennt is reloaded
		setFilteredYear(year);
		props.onSelectedYear(year);
	};

	return ( // The below html elements should have only one root element
		//  Since there is <ul> in ExpensesList.js, due to the semantic reason we will providing <li> here
		<li className="expenses_li">
			<Card className="expenses">

				{/* Two way binding - To define the value of state variable (useState) and change the state through event handlers as input value changes */}
				<ExpensesFilter selected={filteredYear} onStatusChange={filterStatus} />

				{/* Adding expense chart */}
				<ExpensesChart expenses={filteredExpenses} />

				{/* This keeps the jsx code very simple and lean */}
				<ExpensesList items={filteredExpenses} />
			</Card>
		</li>
	);
}

export default Expense;
