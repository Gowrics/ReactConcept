import React,{memo} from 'react'

const ButtonComp = ({title,eventHandler}) => {
  console.log(`Button Component ${title}`);
    return (
    <div style={{backgroundColor:'burlywood'}}>
        <p>Button comp</p>
        <button onClick={eventHandler}>{title}</button>
    </div>
  )
}

export default memo(ButtonComp)

