import React, { useState } from 'react'

const Counter = () => {
  const [state ,setState] = useState(0);
  const countingFunction =()=>{
    setState(state+1);
  };
    return (
    <div>
<button onClick={countingFunction} >Click me</button>
<p> My score is: {state}</p>
    </div>
  )
}

export default Counter;
 
/*  another example
import React, { useState } from 'react';

const Counter = () => {
    const [state, setState] = useState(0);
  
    const countingFunction = (increment) => {
      setState(state + increment); // Increment state by the given value
    };
  
    return (
      <div>
        <button onClick={() => countingFunction(1)}>Increment by 1</button>
        <button onClick={() => countingFunction(5)}>Increment by 5</button>
        <p>My score is: {state}</p>
      </div>
    );
  };
  
  export default Counter;
  */

  
