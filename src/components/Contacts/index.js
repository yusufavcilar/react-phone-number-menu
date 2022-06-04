import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Barış Tunar", 
    phone_number: 19073452},
    { fullname: "Mehmet Seven", 
    phone_number: 85474567},
    { fullname: "Yusuf Avcilar", 
    phone_number: 23983457},
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="container">
       <h1>Contact List</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
