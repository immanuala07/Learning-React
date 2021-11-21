import React from "react";
import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/UsersList";

function App() {
  return (
    <div>
			<AddUser />
			<UserList users={[]} />
    </div>
  );
}

export default App;
