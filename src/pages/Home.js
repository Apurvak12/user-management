import React from 'react';
import UserList from '../components/UserList';

const Home = ({ users, onRemove, onEdit }) => {
  return (
    <div>
      <h1>User Management</h1>
      <UserList users={users} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
};

export default Home;