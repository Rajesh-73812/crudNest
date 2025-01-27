import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h4>Counter{count}</h4>
        <div>
            <button onClick={()=>{dispatch({type:"INCREMENT"})}}>inc</button>
            <button onClick={()=>{dispatch({type:"DECREMENT"})}}>dec</button>
        </div>
    </div>
  )
}

export default Counter