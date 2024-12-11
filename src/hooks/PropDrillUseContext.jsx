import React,{createContext, useContext, useState}  from 'react';

const userContext= createContext();

export default function PropDrillUseContext () { // parent comp
    const [name] = useState('Gowri');
    const [name1] = useState('Gowri');
    return (
      
        <userContext.Provider value={name}  >
      <div> 
      <h1>Parent component...! Global State PropDrilling</h1>
      <ChildComponent1 />
    </div>
    </userContext.Provider>
  )
}
export const useName =()=>  useContext(userContext); // useauth used to access AuthContext

 function  ChildComponent1 () {
  return (
    <>
    <h1>Child1</h1>
    <h2>Welcome ..</h2>  
    <ChildComponent2 />
    </>
  )
}

 function  ChildComponent2 () {
  return (
    <>
    <h1>Child2</h1>
    <h2>  Your Job role is Software Engineer...!</h2>  
    <ChildComponent3/>
    </>
  )
}


function  ChildComponent3 () {
 const name=useContext(userContext)
    return (
    <>
    <h1>Child3</h1>
    <h2> Thank You</h2>
      <h3>{`the user is ${name}`}</h3>  
    </>
  )
}
