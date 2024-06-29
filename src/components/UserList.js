import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onRemove, onEdit }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserItem key={user.id} user={user} onRemove={onRemove} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default UserList;