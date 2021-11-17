import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUsers.module.css';

const AddUser = (props) => {

	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		// className is added to the component where the css from AddUsers.module.css is passed as props to the card.
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />
				<label htmlFor="age">Age (Years)</label>
				<input type="number" id="age" />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
