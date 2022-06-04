import { useState , useEffect} from "react";
const initialFormValue = { fullname: "", phone_number: "" }

function Form({addContact , contacts}) {

    useEffect (()=> {
        setForm(initialFormValue)
    },[contacts])
   
  const [form, setForm] = useState(initialFormValue);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
      e.preventDefault();
      if(form.fullname === "" || form.phone_number === "") {
          return false;
      } 
      addContact([...contacts ,form]);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          value={form.fullname}
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          value={form.phone_number}
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
