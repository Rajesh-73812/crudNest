// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';



// const Counter = () => {
//   const counter = useSelector((state) => state.count); // Access the count from the Redux store
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter</h1>
//       <div>
//         <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       </div>
//       <div>
//         <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//       </div>
//       <div>
//         <button onClick={() => dispatch({ type: 'INCREMENTBY',payload:10 })}>INCREMENTBY</button>
//       </div>
//       <p>Counter: {counter}</p>
//     </div>
//   );
// };

// export default Counter;


// =======================================using connect===============
import React from "react"
import {connect} from 'react-redux'

function Counter({count,increment,decrement,incrementBy}){
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={()=>{incrementBy(10)}}>incrementBy</button>
    </div>
  )
}

// map state to props
const mapStateToProps=(state)=>({
  count:state.count
})

// map dispatch to props
const mapDispatchToProps=(dispatch)=>({
  increment: ()=>dispatch({type:'INCREMENT'}),
  decrement: ()=>dispatch({type:'DECREMENT'}),
  incrementBy: (payload)=>dispatch({type:'INCREMENTBY',payload})
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)