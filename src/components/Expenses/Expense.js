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

			{/* The below html property - itemName, amount & purchaseDate to access props in ExpenseItems.js */}
			<ExpenseItem itemName={props.items[0].name} amount={props.items[0].amt} purchaseDate={props.items[0].date} />
			<ExpenseItem itemName={props.items[1].name} amount={props.items[1].amt} purchaseDate={props.items[1].date} />
			<ExpenseItem itemName={props.items[2].name} amount={props.items[2].amt} purchaseDate={props.items[2].date} />
			<ExpenseItem itemName={props.items[3].name} amount={props.items[3].amt} purchaseDate={props.items[3].date} />
		</Card>
	);
}

export default Expense;
