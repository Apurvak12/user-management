import { useState } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, fullname: 'John Doe', email: 'john@example.com', password: 'password123', address: '123 Main St' },
    { id: 2, fullname: 'Jane Smith', email: 'jane@example.com', password: 'password456', address: '456 Elm St' },
  ]);

  const addUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  return { users, addUser, removeUser, updateUser };
};

export default useUsers;
