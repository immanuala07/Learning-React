import './ExpenseItem.css';
import React from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

	const clickHandler = () => {
		console.log('Çlicked..!');
	};

	return ( // The below html elements should have only one root element
		<Card className="expense-item">
			{/* <ExpenseDate></ExpenseDate> */}
			{/* The above tag can be made as unpaired tag if there is not content inbetween the opening and closing tag */}
			<ExpenseDate purchaseDate={props.purchaseDate} />
			<div className="expense-item__description">
				<h2>{props.itemName}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			{/* CLickHander is mentioned below as varaibale but not as function because if it mentioned as function 
			it will be called when button in initialized on the dom instead calling when button is clicked
			So when we mention it as varaible then this function is called on the button click */}
			<button onClick={clickHandler}>Change Title</button>
			{/* or */}
			{/* Every event listener starts from on_ word and followed by action/eventName in captial for the first letter of the word */}
			<button onClick={function clickHandler() { console.log("Button clicked!!!"); }}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
