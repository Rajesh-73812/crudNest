import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './redux/store'

const Index = () => {
  const navigate=useNavigate();

  const navigateCreate=()=>{
    navigate("/create")
  }
  return (
    <div>
        
        <br />
        <button onClick={()=>{navigateCreate()}} style={{background:'green',color:'wheat'}}>CRUD</button>
    </div>
  )
}

export default Index