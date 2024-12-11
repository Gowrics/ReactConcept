import React,{memo} from 'react'

const Heading = () => {
    console.log("header Component")
  
  
    return (
    <div style={{backgroundColor:'brown'}}>
        <p>heading comp</p>
  
        <h1>Counter Example..</h1>
    </div>
  )
}

export default memo(Heading);

// Memo is a higher order function so pass the component in memo.