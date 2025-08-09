import React, { useState } from "react";
import axios from "axios";
export default function StatusBar({ currentStatus, userId }) {
  const [status, setStatus] = useState(currentStatus || "Available");
  const updateStatus = s => {
    setStatus(s);
    axios.post(`${process.env.REACT_APP_API_URL}/api/status/update`, { userId, status: s });
  };
  return (
    <select value={status} onChange={e => updateStatus(e.target.value)}>
      <option value="Available">Available</option>
      <option value="Busy">Busy</option>
      <option value="Away">Away</option>
      <option value="Custom">Custom...</option>
    </select>
  );
}