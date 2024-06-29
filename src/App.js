import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import useUsers from './hooks/useUsers';
import UserForm from './components/UserForm';
import './App.css';



const App = () => {
  const { users, addUser, removeUser, updateUser } = useUsers();
  const [userToEdit, setUserToEdit] = useState(null);

  const handleEditUser = (user) => {
    setUserToEdit(user);
  };

  const handleSaveUser = (user) => {
    if (user.id) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUserToEdit(null);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home users={users} onRemove={removeUser} onEdit={handleEditUser} />} />
        </Routes>
        <UserForm userToEdit={userToEdit} onSave={handleSaveUser} />
      </div>
    </Router>
  );
};

export default App;

