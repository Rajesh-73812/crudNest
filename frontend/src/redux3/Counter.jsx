import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h4>Count: {count}</h4>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>inc</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>dec</button>
                <button onClick={() => dispatch({ type: "INCREMENTBY", payload: 10 })}>incBy</button>
            </div>
        </div>
    );
};

export default Counter;