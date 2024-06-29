import React from 'react';

const UserItem = ({ user, onRemove, onEdit }) => {
  return (
    <div className="user-item">
      <h2>{user.fullname}</h2>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>Address: {user.address}</p>
      <button className='btn' onClick={() => onEdit(user)}>Edit</button>
      < button className='btn1' onClick={() => onRemove(user.id)}>Remove</button>
    </div>
  );
};

export default UserItem;

