import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Channels() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/channels`).then(res => setChannels(res.data));
  }, []);
  return (
    <div>
      <h4>Channels</h4>
      <ul>
        {channels.map(c => (
          <li key={c._id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}