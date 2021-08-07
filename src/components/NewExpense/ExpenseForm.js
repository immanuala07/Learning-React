import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

	// Parameter within the useState is the default value on the load
	const [enteredTitle, updateTitle] = useState('');

	// An onChange event handler returns a Synthetic Event object 
	// which contains useful meta data such as the target input’s id, name, and current value.
	// We can access the target input’s value inside of the changeTitle by accessing e.target.value.
	// 	Therefore, to log the name of the input field, we can log e.target.name.
	const changeTitle = (event) => {
		console.log(event.target.value);
		updateTitle(event.target.value);
	};

	// Parameter within the useState is the default value on the load
	const [enteredAmt, updateAmt] = useState('');

	// An onChange event handler returns a Synthetic Event object 
	// which contains useful meta data such as the target input’s id, name, and current value.
	// We can access the target input’s value inside of the changeTitle by accessing e.target.value.
	// 	Therefore, to log the name of the input field, we can log e.target.name.
	const changeAmt = (event) => {
		console.log(event.target.value);
		updateAmt(event.target.value);
	};

	// Parameter within the useState is the default value on the load
	const [enteredDate, updateDate] = useState('');

	// An onChange event handler returns a Synthetic Event object 
	// which contains useful meta data such as the target input’s id, name, and current value.
	// We can access the target input’s value inside of the changeTitle by accessing e.target.value.
	// 	Therefore, to log the name of the input field, we can log e.target.name.
	const changeDate = (event) => {
		console.log(event.target.value);
		updateDate(event.target.value);
	};

	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					{/* onChange react event handler uses changeTitle funtion in this example will internally have event as the parameter */}
					<input type='text' value={enteredTitle} onChange={changeTitle} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' onChange={changeAmt} value={enteredAmt} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2019-01-01' max='2022-12-31' onChange={changeDate} value={enteredDate} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='Submit'>Add Expense</button>
			</div>
		</form >
	);
};

export default ExpenseForm;
