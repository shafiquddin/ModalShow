import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers((preState) => [...preState, user]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList listData={users} />
    </div>
  );
}

export default App;