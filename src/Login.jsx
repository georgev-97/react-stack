import { useState } from "react";

function useLogin(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "user") {
            setUser(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    return [user,password,handleChange]
}

export function Login (){
    const[user,password,handleChange] = useLogin();

    return (
        <div>
            <input type="text" value={user} onChange={handleChange} name="user" />
            <input type="password" value={password} onChange={handleChange} name="password" />
        </div>
    )

}