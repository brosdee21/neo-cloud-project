import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      try{
        axios.post("http://127.0.0.1:3001/register/",{
          firstName,
          lastName,
          phoneNumber,
          email,
          password
       });
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <div> 
       <label htmlFor="firstName">First Name</label>
       <input 
        type="text" 
        name="firstName" 
        placeholder="First Name"
        value={firstName}
        noValidate
        onChange={ (e) => setFirstName(e.target.value) }
       />
       </div>
        <div>
        <label htmlFor="lastName">Last Name</label>
        <input 
        type="text" 
        name="lasttName"
        placeholder="Last Name"
        value={lastName}
        noValidate
        onChange={ (e) => setLastName(e.target.value) }  
        />
        </div>
       <div>
       <label htmlFor="phoneNumber">Phone Number</label>
       <input 
       type="number" 
       name=""
       placeholder="Phone Number"
       value={phoneNumber}
       noValidate  
       onChange={ (e) => setPhoneNumber(e.target.value) }
       />
       </div>
       <div>
       <label htmlFor="email">Email</label>
       <input 
       type="text" 
       name=""  
       placeholder="Email"
       value={email}
       noValidate
       onChange={ (e) => setEmail(e.target.value) }
       />
       </div>
       <div>
       <label htmlFor="password">Password</label>
       <input 
       type="text"
       placeholder="Password"
       value={password}
       noValidate
       onChange={ (e) => setPassword(e.target.value) } 
       />
       </div>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
