import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [form,setForm]=useState({"email":"","password":""})
    const navigate=useNavigate()
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post("http://localhost:4001/auth/login", form); // Corrected URL
          if (response.status === 200) { // Login success (200, not 201)
            alert("Login successful!");
            // You can also save the access token in localStorage or state here
            localStorage.setItem('accessToken', response.data.accessToken);
            navigate('/home');
          }
        } catch (error) {
          console.log(error);
          alert('Error logging in. Please try again.');
        }
      };
      
  return (
    <div>
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
               
                <div>
                    <label>email:</label>
                    <input type="text" name="email" onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="password" onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login