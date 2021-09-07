import React from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
	return ( // The below html elements should have only one root element
		<Card className="expense-item">
			{/* <ExpenseDate></ExpenseDate> */}
			{/* The above tag can be made as unpaired tag if there is not content inbetween the opening and closing tag */}
			<ExpenseDate purchaseDate={props.purchaseDate} />
			<div className="expense-item__description">
				{/* The special variable from line number 12 is used below to display on the webpage */}
				<h2>{props.itemName}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
