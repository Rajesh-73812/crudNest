import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch();
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{dispatch({type:'INCREMENT'})}}>increment</button>
        <button onClick={()=>{dispatch({type:'DECREMENT'})}}>decrement</button>
        <button onClick={()=>{dispatch({type:'INCREMENTBY',payload:10})}}>incrementBy</button>
    </div>
  )
}

export default Counter