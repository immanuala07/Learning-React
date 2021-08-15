import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}
		console.log(expenseData);
		props.onAddExpense(expenseData);
	}

	return (
		<div className='new-expense'>
			{/* Child to Parent communication is the function defined in child component and added them to the parent component as the property assigned to function variable.
			that function is acessed as props.componentPropertyName and it is called when associated action is done on the component */}
			{/* Parent component is below  and NewExpense.js is the parent component for ExpenseForm */}
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
