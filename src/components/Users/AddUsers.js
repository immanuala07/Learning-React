import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUsers.module.css';

const AddUser = (props) => {

	const [error, setError] = useState("");

	// useRef - It helps to get access the DOM node or element, and then we can interact with that DOM node or element such as focussing the input element or accessing the input element value.
	// It returns the ref object whose.current property initialized to the passed argument.
	// The returned object persist for the lifetime of the component.
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const addUserHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values)."
			});
			return;
		}

		// Adding a forced conversion to ensure that it is number by adding + to enteredAge
		if (+enteredUserAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (> 0)."
			});
			return;
		}

		props.onAddUser(enteredName, enteredUserAge);

		// Resetting logic for useRef() returned value but it should be used rarely.
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		// below shortcut for React Fragments
		<>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

			{/* className is added to the component where the css from AddUsers.module.css is passed as props to the card. */}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					{/* Adding bult-in ref prop for the react component which uses useRef returned value */}
					<input type="text" id="username" ref={nameInputRef} />
					<label htmlFor="age">Age (Years)</label>
					{/* Adding bult-in ref prop for the react component which uses useRef returned value */}
					<input type="number" id="age" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
		// above shortcut for React Fragments
	);
};

export default AddUser;
