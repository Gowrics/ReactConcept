import React, { useState } from 'react'

export default function PropDrilling (){
const [name] = useState('Gowri')
    return (
    <div>
        <center><h1 style={{backgroundColor:'black', color:'white',width:'20%'}}>PropDrilling</h1></center>
      
      <h1>Parent component...! Local State PropDrilling</h1>
      <ChildComponent1 name={name}/>
    </div>
  )
}

 function  ChildComponent1 ({name}) {
  return (
    <>
    <h1>Child1</h1>
    <h2>Welcome {name} ..</h2>  
    <ChildComponent2 name={name}/>
    </>
  )
}

 function  ChildComponent2 ({name}) {
  return (
    <>
    <h1>Child2</h1>
    <h2> {name} Your Job role is Software Engineer...!</h2>  
    <ChildComponent3 name={name}/>
    </>
  )
}


function  ChildComponent3 ({name}) {
  return (
    <>
    <h1>Child3</h1>
    <h2> Thank You {name} </h2>
      <h3>{`the user is ${name}`}</h3>  
    </>
  )
}
