import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Barış Tunar", phone_number: 3567 - 3456 - 12 },
    { fullname: "Mehmet Seven", phone_number: 8547 - 2974 - 56 },
    { fullname: "Yusuf Avcilar", phone_number: 2398 - 5621 - 43 },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
