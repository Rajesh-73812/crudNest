import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch({ type: 'INCREMENT' });
  const handleDecrement = () => dispatch({ type: 'DECREMENT' });
  const handleIncrementBy = (payload) => dispatch({ type: 'INCREMENTBY', payload });

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={handleIncrement}>inc</button>
      <button onClick={handleDecrement}>dec</button>
      <button onClick={() => handleIncrementBy(10)}>incBy</button>
    </div>
  );
}

export default Counter;