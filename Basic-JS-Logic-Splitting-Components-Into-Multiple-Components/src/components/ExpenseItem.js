import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

	return ( // The below html elements should have only one root element
		<div className="expense-item">
			{/* <ExpenseDate></ExpenseDate> */}
			{/* The above tag can be made as unpaired tag if there is not content inbetween the opening and closing tag */}
			<ExpenseDate purchaseDate={props.purchaseDate} />
			<div className="expense-item__description">
				<h2>{props.purchaseDate.toISOString()}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
