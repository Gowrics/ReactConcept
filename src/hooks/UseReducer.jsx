import React, { useReducer } from 'react';

// Reducer function to manage the state
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'multiplication':
      return { count: state.count * 2}
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unexpected action');
  }
};

// Initial state for the counter
const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'multiplication' })}>Multiplication</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};


export default Counter;
