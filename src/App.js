import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/UsersList";

function App() {
	const [userList, setUserList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUserList((previousUsersList) => {
			return [...previousUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
		});
	};

	return (
		// below is React Fragments
		// <React.Fragment>
		// 	<AddUser onAddUser={addUserHandler} />
		// 	<UserList users={userList} />
		// </React.Fragment>
		// above is React Fragments

		// (or)

		// below is React Fragments
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={userList} />
		</Fragment>
		// above is React Fragments
	);
}

export default App;
