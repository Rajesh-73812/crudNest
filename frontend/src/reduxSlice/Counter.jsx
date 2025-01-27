import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Corrected to `state.counter.value`
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Counter: {count}</h4>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
      </div>
    </div>
  );
};

export default Counter;