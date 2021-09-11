import React from 'react';
import ExpenseItem from './ExpenseItem'; // eslint-disable-line no-unused-vars
import './ExpensesList.css';

const ExpensesList = props => {

	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
	}

	return (
		// Since there is <ul> here, due to the semantic reason we will providing <li> in Expense.js 
		<ul className='expenses-list'>
			{props.items.map((expense) => (
				<ExpenseItem key={expense.id} itemName={expense.name} amount={expense.amt} purchaseDate={expense.date} />
			))}
		</ul>
	);

};

export default ExpensesList;
