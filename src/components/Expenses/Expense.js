import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expense.css";

function Expense(props) {

	const filterStatus = status => {
		props.onSelectedYear(status);
	};

	var rows = [];
	if (!props.items.count) {
		for (var i = 0; i < props.items.length; i++) {
			rows.push(<ExpenseItem itemName={props.items[i].name} amount={props.items[i].amt} purchaseDate={props.items[i].date} />);
		}
	} else {
		for (var i = 0; i < props.items.count; i++) {
			rows.push(<ExpenseItem itemName={props.items[i].name} amount={props.items[i].amt} purchaseDate={props.items[i].date} />);
		}
	}

	return ( // The below html elements should have only one root element
		<Card className="expenses">
			<ExpensesFilter onStatusChange={filterStatus} />
			{rows}
		</Card>
	);
}

export default Expense;
