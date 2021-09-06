import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}

		console.log("In NewExpense.js to App.js");
		console.log(expenseData);

		props.onAddExpense(expenseData);
	}

	return (
		<div className='new-expense'>
			{/* Child to Parent communication is the function defined in parent component and added them to the child component as the property assigned to function variable.
			that function is acessed as props.componentPropertyName and it is called when associated action is done on the component. */}

			{/* lifting the state up - Several components need to reflect the same changing data. We recommend lifting the shared state/data up to their closest common ancestor. */}

			{/* Parent component is below  and NewExpense.js is the parent component for ExpenseForm */}
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
