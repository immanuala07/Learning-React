import { React, useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUsers.module.css';

const AddUser = (props) => {

	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();
		console.log(enteredUsername, enteredAge);
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
				<input type="text" id="username" onChange={usernameChangeHandler} />
				<label htmlFor="age">Age (Years)</label>
				<input type="number" id="age" onChange={ageChangeHandler} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
