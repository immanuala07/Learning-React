import './ExpenseItem.css';

function ExpenseItem(props) {

	return ( // The below html elements should have only one root element
		<div className="expense-item">
			<div>{props.itemName}</div>
			<div className="expense-item__description">
				<h2>{props.purchaseDate.toISOString()}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
