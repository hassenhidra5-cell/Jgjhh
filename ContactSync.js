import React, { useState } from "react";
import axios from "axios";
export default function ContactSync() {
  const [contactsFile, setContactsFile] = useState(null);
  const syncContacts = () => {
    const form = new FormData();
    form.append("contacts", contactsFile);
    axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/sync`, form);
  };
  return (
    <div>
      <input type="file" onChange={e => setContactsFile(e.target.files[0])} />
      <button onClick={syncContacts}>Sync Contacts</button>
    </div>
  );
}