import React, { useReducer } from 'react'

//define reducer with name is transactionreducer  -1
const transactionReducer=(state,action) => {
    switch (action.type){
        case "WITHDRAW":
            return state -  action.payload
        case "DEPOSIT":
            return state + action.payload
        default:
        return state
    }
}
const UseReducerExample1 = () =>  {
    //use the useReducer hook 
    //this hook is return the reducer function(transactiomReducer)
    const [state,dispatch] =useReducer(transactionReducer,1000)   //it return the current state and dispatch fun

    const withdraw =(amount) =>{
        dispatch({type:'WITHDRAW',payload:amount})
      }
    //const deposite =(amount) =>{
    //   dispatch({type:'DEPOSIT',payload:amount})
    // }   // write the fuction seperatly
    
  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=>withdraw(500)}> Withdraw </button>                  {/* fun call */}
    <button onClick={()=>dispatch({type:'DEPOSIT',payload:500})}> Deposite </button>   {/* define fun */}
    </>
  )
}

export default UseReducerExample1