import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/UsersList";

function App() {
	const [userList, setUserList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		// setUserList(uName, uAge);
		setUserList((previousUsersList) => {
			return [...previousUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
		});
	};

  return (
    <div>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={userList} />
    </div>
  );
}

export default App;
