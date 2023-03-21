import { useEffect, useState } from "react";

function useForm(...fields) {
  const emptyDataObject = {};
  for (const key of fields) { //object containing a field for each field
    emptyDataObject[key] = "";
  }
  const [data, setData] = useState(emptyDataObject);
  function handleInputChange(event) {
    const { value, type, checked, name } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  }
  return [data, handleInputChange];
}

export function Form(props) {
  const [data, handleInputChange] = useForm("username", "password", "remember");
  useEffect(() => {
    console.log(data);
  }, [data]);

  function login(){
    alert("Logged-in "+data.username);
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        name="remember"
        value={data.remember}
        onChange={handleInputChange}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}
