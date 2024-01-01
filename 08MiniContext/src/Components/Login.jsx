import React from "react";
import { useState, useContext } from "react";
import UserContext from '../UserContext/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }

    return (
        <div>
            <input value={username}
            type="text" placeholder="Your User Name" 
            onChange={(e) => setUsername(e.target.value)}
            />
            <input value={password}
            type="password" placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleSubmit}
            >Submit</button>
        </div>
    );
}

export default Login;
