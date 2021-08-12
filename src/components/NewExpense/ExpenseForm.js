import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

	// Parameter within the useState is the default value on the load
	// const [enteredTitle, updateTitle] = useState('');
	// const [enteredAmt, updateAmt] = useState('');
	// const [enteredDate, updateDate] = useState('');
	// (or)
	//The useState is used only when the current state is dependent on the previous state
	const [userInput, setUserInput] = useState({ // eslint-disable-line no-unused-vars
		enteredTitle: '',
		enteredAmt: '',
		enteredDate: ''
	});

	// An onChange event handler returns a Synthetic Event object 
	// which contains useful meta data such as the target input’s id, name, and current value.
	// We can access the target input’s value inside of the changeTitle by accessing e.target.value.
	// 	Therefore, to log the name of the input field, we can log e.target.name.
	const changeTitle = (event) => {
		setUserInput((prevState) => {
			console.log({ ...prevState, enteredTitle: event.target.value });
			// Objects cannot have same roperty in an object
			// The below spread operator amd enteredTitle value overrides on the enteredTitle in prevState of the spread operator
			return { ...prevState, enteredTitle: event.target.value };
		});
	};

	const changeAmt = (event) => {
		setUserInput((prevState) => {
			console.log({ ...prevState, enteredAmt: event.target.value });
			// Objects cannot have same roperty in an object
			// The below spread operator amd enteredAmt value overrides on the enteredAmt in prevState of the spread operator
			return { ...prevState, enteredAmt: event.target.value };
		});
	};

	const changeDate = (event) => {
		setUserInput((prevState) => {
			console.log({ ...prevState, enteredDate: event.target.value });
			// Objects cannot have same roperty in an object
			// The below spread operator amd enteredDate value overrides on the enteredDate in prevState of the spread operator
			return { ...prevState, enteredDate: event.target.value };
		});
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
