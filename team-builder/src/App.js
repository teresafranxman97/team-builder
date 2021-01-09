import React, { useState } from 'react';
import './App.css';

import UserForm from './Form';
import Users from './Users';

function App() {

  const [users, setUsers] = useState([
    {
      name: "Teresa Franxman",
      email: "teresafranxman97@gmail.com",
      role: "Software Engineer"
    }
  ]);

  const addNewUser = user => {
    const newUser = {
      name: user.name,
      email: user.email,
      role: user.role
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <h1>New User</h1>
      <UserForm addNewUser={addNewUser}/>
      <Users users={users}/>
    </div>
  );
}

export default App;
