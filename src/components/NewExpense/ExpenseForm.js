import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

	// Parameter within the useState is the default value on the load
	const [enteredTitle, updateTitle] = useState(''); // eslint-disable-line no-unused-vars
	const [enteredAmt, updateAmt] = useState(''); // eslint-disable-line no-unused-vars
	const [enteredDate, updateDate] = useState(''); // eslint-disable-line no-unused-vars

	// An onChange event handler returns a Synthetic Event object 
	// which contains useful meta data such as the target input’s id, name, and current value.
	// We can access the target input’s value inside of the changeTitle by accessing e.target.value.
	// 	Therefore, to log the name of the input field, we can log e.target.name.
	const changeTitle = (event) => {
		console.log(event.target.value);
	};

	const changeAmt = (event) => {
		console.log(event.target.value);
	};

	const changeDate = (event) => {
		console.log(event.target.value);
	};

	return (
		<form>
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
