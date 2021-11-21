import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUsers.module.css';

const AddUser = (props) => {

	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			return;
		}

		// Adding a forced conversion to ensure that it is number by adding + to enteredAge
		if (+enteredAge < 1) {
			return;
		}

		// console.log(enteredUsername, enteredAge);
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		// className is added to the component where the css from AddUsers.module.css is passed as props to the card.
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername} />
				<label htmlFor="age">Age (Years)</label>
				<input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
