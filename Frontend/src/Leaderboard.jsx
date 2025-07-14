import React, { useState } from 'react';
import './UserSelector.css';

// Component for selecting an existing user or adding a new one
function UserSelector({ users, selectedUser, setSelectedUser, onAddUser }) {
  const [newUser, setNewUser] = useState('');

  return (
    <div className="user-selector">
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="New User"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={() => {
        if (newUser) {
          onAddUser(newUser);
          setNewUser('');
        }
      }}>+ Add</button>
    </div>
  );
}

export default UserSelector;