import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

	// Parameter within the useState is the default value on the load
	const [enteredTitle, updateTitle] = useState('');
	const [enteredAmt, updateAmt] = useState('');
	const [enteredDate, updateDate] = useState('');

	// console.log("Before");
	// console.log(enteredTitle, " - ", enteredAmt, " - ", enteredDate);

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

		// Child to Parent communication is the function defined in child component and added them to the parent component as the property assigned to function variable.
		// that function is acessed as props.componentPropertyName and it is called when associated action is done on the component
		// Child component is below
		props.onSaveExpenseData(expenseData);

		// Clear the input text after clciking in submit
		updateTitle('');
		updateAmt('');
		updateDate('');

		// console.log("After");
		// console.log(expenseData);
		// console.log(enteredTitle, " - ", enteredAmt, " - ", enteredDate);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					{/* Value property is used to fetch the value during the submit clicked and empty the textbox after the button clicked - Two way binding*/}
					{/* Two way binding - For inputs, we dont just listen to the changes but also we can pass a new value back into the input so we can reset or change input programmatically  */}
					<input type='text' value={enteredTitle} onChange={changeTitle} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' value={enteredAmt} onChange={changeAmt} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={changeDate} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='Submit'>Add Expense</button>
			</div>
		</form >
	);
};

export default ExpenseForm;
