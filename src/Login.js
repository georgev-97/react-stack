import { useState } from "react";

export function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInputs = (event) => {
    const {value, checked, name, type} = event.target;
    setFormData({ ...formData, [name]: type==="checkbox" ? checked : value});
  };

  const { username, password, remember } = formData;
  return (
    <div>
      <input
        type="text"
        onChange={handleInputs}
        name="username"
        placeholder="Username"
        value={username}
      ></input>
      <input
        type="password"
        onChange={handleInputs}
        name="password"
        placeholder="Password"
        value = {password}
      ></input>
      <input type="checkbox" onChange={handleInputs} name="remember"></input>
      <button onClick={() => props.onLogin(formData)}>Login</button>
    </div>
  );
}
