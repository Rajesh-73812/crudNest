import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [form,setForm]=useState({"username":"","email":"","password":""})
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()

        try {
            const response=await axios.post("http://localhost:4001/auth/register",form);
            if(response.status === 201){
                alert("form submited")
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <div>
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={handleChange} />
                </div>
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

export default Register