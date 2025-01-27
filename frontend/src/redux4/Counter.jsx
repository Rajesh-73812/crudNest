import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
const Counter = () => {
    const count=useSelector((state)=>state.count)
    const user=useSelector((state)=>state.user)
    const todos=useSelector((state)=>state.todos)
    const dispatch=useDispatch()
    const index=0;
    const theme=useSelector((state)=>state.theme)
    const [customcount,setCustomCount]=useState('');
  return (
    <div>
        <div style={{backgroundColor: theme === "light" ? "#fff" : "#333",color : theme === "light" ? "#000" : "#fff"}}>
            <h4>Counter{count}</h4>
            <h4>NAME:{user.name}</h4>
            <h4>AGE:{user.age}</h4>
            <h5>TODOS:{todos}</h5>
            <button onClick={()=>{dispatch({"type":"INCREMENT"})}}>inc</button>
            <button onClick={()=>{dispatch({"type":"DECREMENT"})}}>dec</button>
            <button onClick={()=>{dispatch({"type":"INCREMENTBY",payload:10})}}>incBY</button>
            <button onClick={()=>{dispatch({type:"DECREMENTBY",payload:15})}}>decBY</button>
            <button onClick={()=>{dispatch({type:"RESET"})}}>RESET</button>
            <button onClick={()=>{dispatch({type:"MULTIPLYBY10",payload:15})}}>MULTIPLYBY10</button>
            <button onClick={()=>{dispatch({"type":"UPDATENAME",payload:"rajesh swain"})}}>UPDATENAME</button>
            <button onClick={()=>{dispatch({"type":"UPDATEDAGE",payload:24})}}>UPDATEDAGE</button>
            <button onClick={()=>{dispatch({"type":"ADDTODO",payload:24})}}>ADDTODO</button>
            <button onClick={()=>{dispatch({"type":"REMOVETODO",payload:index})}}>REMOVETODO</button>
            <button onClick={()=>{dispatch({"type":"CLEARTODO",payload:24})}}>CLEARTODO</button>
  
            <hr>
            </hr>
            <button onClick={()=>{dispatch({"type":"DOUBLE"})}}>Double</button>
            <button onClick={()=>{dispatch({"type":"SQUARE"})}}>SQUARE</button>
            <button onClick={()=>{dispatch({"type":"RANDOMIZE"})}}>RANDOMIZE</button>
            <button onClick={()=>{dispatch({"type":"TOGGLE_THEME",payload:"dark"})}}>TOGGLE_THEME</button>
            <input type='number' onChange={(e)=>{setCustomCount(Number(e.target.value))}}></input>
            <button onClick={()=>{dispatch({"type":"SET_COUNT",payload:customcount})}}>SET_COUNT</button>
        </div>
    </div>
  )
}

export default Counter