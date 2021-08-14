import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

	// Parameter within the useState is the default value on the load
	const [enteredTitle, updateTitle] = useState('');
	const [enteredAmt, updateAmt] = useState('');
	const [enteredDate, updateDate] = useState('');

	// An onChange event handler returns a Synthetic Event object 
	// which contains useful meta data such as the target input’s id, name, and current value.
	// We can access the target input’s value inside of the changeTitle by accessing e.target.value.
	// Therefore, to log the name of the input field, we can log e.target.name.
	const changeTitle = (event) => {
		updateTitle(event.target.value);
	};

	const changeAmt = (event) => {
		updateAmt(event.target.value);
	};

	const changeDate = (event) => {
		updateDate(event.target.value);
	};

	// Form submit handler
	const submitHandler = (event) => {
		// event.preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
		// It does not prevent further propagation of an event through the DOM.
		event.preventDefault();

		const expenseData = {
			name: enteredTitle,
			amt: enteredAmt,
			date: new Date(enteredDate)
		};
		console.log(expenseData);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					{/* onChange react event handler uses changeTitle funtion in this example will internally have event as the parameter */}
					<input type='text' onChange={changeTitle} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' onChange={changeAmt} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2019-01-01' max='2022-12-31' onChange={changeDate} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='Submit'>Add Expense</button>
			</div>
		</form >
	);
};

export default ExpenseForm;
