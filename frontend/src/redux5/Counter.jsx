import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Counter = () => {
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h4>Count:{count}</h4>
        <button onClick={()=>{dispatch({"type":"INCREMENT"})}}>inc</button>
    </div>
  )
}

export default Counter