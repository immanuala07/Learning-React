import ExpenseItem from "./components/ExpenseItem";
// We can use the above import component as html element 

function App() {
	return (
		<div>
			<h2>Let's get started!</h2>
			<ExpenseItem></ExpenseItem> {/* Display the html element defined in ExpesnseItem.js */}
		</div>
	);
}

export default App;
