import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expense.css";

function Expense(props) {

	// Setting the deafult value to dropdown filter by value as 2021
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterStatus = year => {
		console.log("In Expense.js");
		console.log(year);
		setFilteredYear(year);
		props.onSelectedYear(year);
	};

	return ( // The below html elements should have only one root element
		<Card className="expenses">

			{/* Two way binding - To define the value of state variable (useState) and change the state through event handlers as input value changes */}
			<ExpensesFilter selected={filteredYear} onStatusChange={filterStatus} />

			{/* Dynamic way of loading the array of exoenses data by using map function */}
			{/* Array => props.items[n]
			props.items array is accessed through map function as expense object within the array with several properties like name, amt and date
			and these dynamic data is loaded in the ExpenseItem which is the custom component */}

			{/* Warning: Each child in a list should have a unique "key" prop. */}
			{/* To fix the above error we should be adding the id property in expenses object of app.js and access those in the custom component as the `key`
			prop. */}
			{props.items.map(expense => <ExpenseItem key={expense.id} itemName={expense.name} amount={expense.amt} purchaseDate={expense.date} />)}

			{/* Iterative way of loading an array - The below html property - itemName, amount & purchaseDate to access props in ExpenseItems.js */}
			{/* <ExpenseItem itemName={props.items[0].name} amount={props.items[0].amt} purchaseDate={props.items[0].date} />
			<ExpenseItem itemName={props.items[1].name} amount={props.items[1].amt} purchaseDate={props.items[1].date} /> */}
		</Card>
	);
}

export default Expense;
