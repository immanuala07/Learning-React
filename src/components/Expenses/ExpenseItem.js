import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

	// useState - react hooks
	// It is a function providedby the react library
	// allows to define values as state where chnages to these values
	// should reflect in the component function when being called again
	const [title, setTitle] = useState(props.itemName);
	//The above state return an arry of two elemnts
	// title (special variable)- Output or updated value to be used further in custom component
	// setTitle (function) - Function to be used for updating the new title whhen new title is passed as parameter

	const clickHandler = () => {
		setTitle("Title Changed - Button clicked...!");
	};

	return ( // The below html elements should have only one root element
		<Card className="expense-item">
			{/* <ExpenseDate></ExpenseDate> */}
			{/* The above tag can be made as unpaired tag if there is not content inbetween the opening and closing tag */}
			<ExpenseDate purchaseDate={props.purchaseDate} />
			<div className="expense-item__description">
				{/* The special variable from line number 12 is used below to display on the webpage */}
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			{/* CLickHander is mentioned below as varaibale but not as function because if it mentioned as function 
			it will be called when button in initialized on the dom instead calling when button is clicked
			So when we mention it as varaible then this function is called on the button click */}
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
