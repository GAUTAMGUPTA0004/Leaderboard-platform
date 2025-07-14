import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserSelector from './UserSelector';
import Leaderboard from './Leaderboard';
import ClaimInfo from './Claiminfo';


const API ='https://leaderboard-platform.onrender.com';

// Main React component of the app
// It manages the app state and brings all components together
function App() {
  // State to store all users fetched from backend
const [users, setUsers] = useState([]);
  // State to track which user is currently selected
const [selectedUser, setSelectedUser] = useState('');
  // State to store last claimed points value for feedback
const [claimedPoints, setClaimedPoints] = useState(null);

  // Fetch users from backend and update state
const fetchUsers = async () => {
    const res = await axios.get(`${API}/users`);
    setUsers(res.data);
  };

  // useEffect to fetch user list when component loads
useEffect(() => {
    fetchUsers();
  }, []);

  // Function to handle Claim Points button click
// Sends request to backend and updates points + leaderboard
const handleClaim = async () => {
    if (!selectedUser) return alert('Select a user!');
    const res = await axios.post(`${API}/claim/${selectedUser}`);
    setClaimedPoints(res.data.points);
    fetchUsers();
  };

  // Function to add a new user by name
const handleAddUser = async (name) => {
    await axios.post(`${API}/users`, { name });
    fetchUsers();
  };

  // Return the main UI layout with title, selectors, and leaderboard
return (
    <div className="container">
      <h1 className="title">🏆 Leaderboard Ranking</h1>
      <UserSelector
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        onAddUser={handleAddUser}
      />
      <button className="claim-btn" onClick={handleClaim}>🎯 Claim Points</button>
      <ClaimInfo points={claimedPoints} />
      <Leaderboard users={users} />
    </div>
  );
}

export default App;