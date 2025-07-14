import { useEffect, useState } from "react";
import axios from "axios";

export default function UserSelector({ selectedUser, setSelectedUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then(res => setUsers(res.data));
  }, []);

  return (
    <select onChange={(e) => setSelectedUser(e.target.value)}>
      <option>Select User</option>
      {users.map(user => (
        <option key={user._id} value={user._id}>{user.name}</option>
      ))}
    </select>
  );
}