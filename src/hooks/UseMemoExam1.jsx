import React, { useState,useMemo } from "react";
export const Home1 =()=> {
    //state
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);
    
    //Expensive function
   //const calculation =simpleCalculation(count);  //without memo

    const calculation =useMemo(()=> expansiveCalculation(count),[count]);

    const increment = () => {
        setCount((prevCount) => prevCount +1);
        console.log("Increment ...");

    };
    const addTodo = () => {
        setTodos((prevState) => [...prevState, "New Todo"]);
        console.log("ToDo ...");

    };
    return (
<div>
    <div>
        <center><h1 style={{backgroundColor:'black', color:'white',width:'20%'}}>UseMemo Hook</h1></center>
        <h2>My Todos</h2>


        {todos.map((todo,index) => {
            return<p key={index}>{todo}</p> ;
        })}
        <button onClick={addTodo}>Add Todo</button>
    </div>
    <hr/>
    <div>
        Count:{count}
        <button onClick={increment}> + </button>
        <h2>Costly Calculation</h2>
        <p>{calculation}</p>
            </div>
</div>
);
}

const expansiveCalculation =(num) =>{
    console.log("Calculation ...");
    for (let i = 0; i < 10000000; i++){
        num +=1;
    }
    return num;
};
const simpleCalculation =(num) =>{
    console.log("I am simple calculation ...");
    for (let i = 0; i < 10; i++){
        num +=1;
    }
    return num;
};