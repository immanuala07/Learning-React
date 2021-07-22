import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expense.css";

function Expense(props) {

	return ( // The below html elements should have only one root element
		<Card className="expenses">

			{/* The below html property - itemName, amount & purchaseDate to access props in ExpenseItems.js */}
			<ExpenseItem itemName={props.items[0].name} amount={props.items[0].amt} purchaseDate={props.items[0].date} />
			<ExpenseItem itemName={props.items[1].name} amount={props.items[1].amt} purchaseDate={props.items[1].date} />
			<ExpenseItem itemName={props.items[2].name} amount={props.items[2].amt} purchaseDate={props.items[2].date} />
		</Card>
	);
}

export default Expense;