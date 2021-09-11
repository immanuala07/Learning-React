import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

	const dropDownChangeHandler = event => {
		// updateYear(event.target.value);
		props.onStatusChange(event.target.value);
		console.log(event.target.value);
	};

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				{/* Two way binding - To define the value of state variable (useState) and change the state through event handlers as input value changes */}
				<select value={props.selected} onChange={dropDownChangeHandler}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
					<option value='2018'>2018</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
