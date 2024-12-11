import React, { useCallback, useState } from 'react'
import Heading from './Heading';
import InfoComp from './InfoComp';
import ButtonComp from './ButtonComp';

const Home = () => {
 const [counter1,setCounter1] = useState(0);
 const [counter2,setCounter2] = useState(10);
 

 const Increment1 = useCallback (() => {
    setCounter1(counter1 + 1)},[counter1]  // dependency array for counter1
)
 
const Increment2 = useCallback (() => {
    setCounter2(counter1 + 2)},[counter2] )  // dependency array for counter2
 
    return ( 
    <div style={{backgroundColor:'yellow'}}>
       <h2>  useCallback Hook Demo</h2>
       <Heading/>
       <InfoComp title ="Counter1" value={counter1}/>
       <ButtonComp title="Increment1 " eventHandler={Increment1} />
       <InfoComp title ="Counter2" value={counter2}/>
       <ButtonComp title ="Increment2" eventHandler  = {Increment2}/>
    </div>
  )
}

export default Home;

//when our component rerendering unnecessory we introduce memo 

// the memo is used in without maintain any local or global state like headercomp.

//if props as a fuction , memo does not handle so use callback in function(increment1,increment2)