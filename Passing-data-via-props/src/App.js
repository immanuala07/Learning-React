import ExpenseItem from "./components/ExpenseItem";

function App() {

	let expense = [{ name: "Grocery", amt: 250.00, date: new Date(2021, 2, 28) }, { name: "Fridge", amt: 12250.00, date: new Date(2021, 2, 28) }];

	return (
		<div>
			<h2>Let's get started!</h2>
			{/* The below html property - itemName, amount & purchaseDate to access props in ExpenseItems.js */}
			<ExpenseItem itemName={expense[0].name} amount={expense[0].amt} purchaseDate={expense[0].date}></ExpenseItem>
			<ExpenseItem itemName={expense[1].name} amount={expense[1].amt} purchaseDate={expense[1].date}></ExpenseItem>
		</div>
	);
}

export default App;
