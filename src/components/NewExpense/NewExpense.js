import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

	// useState from 
	const [editingStatus, setEditingStatus] = useState(false); //eslint-disable-line no-unused-vars

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}
		console.log(expenseData);
		props.onAddExpense(expenseData);
		setEditingStatus(false);
	}

	const addNewExpensesClickHandler = (event) => {
		setEditingStatus(true);
	};

	return (
		<div className='new-expense'>
			{/* Below statement acts like a if condition. The portion before && part is the condtion and the part after && is returned. */}
			{!editingStatus && <button type='button' onClick={addNewExpensesClickHandler}>Add New Expense</button>}

			{/* Child to Parent communication is the function defined in parent component and added them to the child component as the property assigned to function variable.
			that function is acessed as props.componentPropertyName and it is called when associated action is done on the component */}
			{/* Parent component is below  and NewExpense.js is the parent component for ExpenseForm */}
			{/* Below statement acts like a if condition. The portion before && part is the condtion and the part after && is returned. */}
			{editingStatus && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} updateEditingStatus={setEditingStatus} />}
		</div>
	);
};

export default NewExpense;
