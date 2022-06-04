import { useState } from "react";

function Form({addContact , contacts}) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
      e.preventDefault();
      if(form.fullname === "" || form.phone_number === "") {
          return false;
      }

      addContact([...contacts ,form])
    
  };
  

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button>ADD</button>
      </div>
    </form>
  );
}

export default Form;
