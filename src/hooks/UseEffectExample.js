import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
  
    const countingNum1 = (increment) => {
      setNum1(num1 + increment); // Increment state by the given value
    };
    const countingNum2 = (increment) => {
        setNum2(num2 + increment); // Increment state by the given value
      };
      // type1 execute on render and all state changes
      //useEffect(()=>{
       // console.log("useeffect run");
      //});

      // type2 execute on render and only dependency array state changes
      //useEffect(()=>{
     //console.log("useeffect run");
      //},[num2]);

      
      // type execute on only once  render
      //useEffect(()=>{
       // console.log("useeffect run");
      //},[]);

     //type2 execute on render and only dependency array state changes
      useEffect(()=>{
     console.log("useeffect run");
     return()=> console.log("num2 counter cleanup");
          },[num2]);


      return (
      <div>
        <button onClick={() => countingNum1(1)}>Increment by 1</button>
        <button onClick={() => countingNum2(5)}>Increment by 5</button>
        <p>My score is: {num1}</p>
        <p>My score is: {num2}</p>
      </div>
    );
  };
  
  export default UseEffectExample;
