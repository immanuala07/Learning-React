import React from "react";

import Card from "../UI/Card";
import classes from "../Users/UsersList.module.css";

const UserList = (props) => {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((user) => (
					// To avoid the unique key error so we have added the unique key prop with unique value.
					<li key={user.id}>{user.name} ({user.age} years old)</li>)
				)} 
			</ul>
		</Card>
	);
};

export default UserList;
