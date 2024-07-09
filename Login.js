import react, { useState } from 'react';
import axios from "axios";

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
}

const handleSubmit = (e) => {
  e.preventDefault();
  try{
    axios.post("https://127.0.0.1:3001/login/",
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
    return (
      <div>
        <form action="">
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            name=""
            placeholder='Email'
            value={email}
            noValidate
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input 
            type="text" 
            name=''
            placeholder='Password'
            value={password}
            noValidate
            onChange={(e) => setPassword(e.target.value)}
            />
        </form>
      </div>
    )
  }
  
  export default Login;