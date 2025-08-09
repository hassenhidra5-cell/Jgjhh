import React, { useState } from "react";
import axios from "axios";
export default function InviteFriends() {
  const [phone, setPhone] = useState("");
  const invite = () => axios.post(`${process.env.REACT_APP_API_URL}/api/invite`, { phone });
  return (
    <div>
      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Friend's phone" />
      <button onClick={invite}>Invite via SMS</button>
    </div>
  );
}