import React, { useState } from 'react';
import './UserSelector.css';

// Component for selecting an existing user or adding a new one
function UserSelector({ users, selectedUser, setSelectedUser, onAddUser }) {
  const [newUser, setNewUser] = useState('');

  const handleAddUser = () => {
    if (newUser.trim()) {
      onAddUser(newUser.trim());
      setNewUser('');
    }
  };

  return (
    <div className="user-selector">
      <select 
        value={selectedUser} 
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="New User Name"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAddUser();
          }
        }}
      />
      <button onClick={handleAddUser}>
        + Add User
      </button>
    </div>
  );
}

export default UserSelector;