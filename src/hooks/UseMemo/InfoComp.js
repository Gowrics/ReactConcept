import React, {memo} from 'react'
const InfoComp = ({title,value}) => {
  console.log("Info Component")
    return (
    <div style={{backgroundColor:'green'}}>
<p>Info comp</p>
  
<h3> {title}</h3>
<h3> {value}</h3>
    </div>
  )
}

export default memo(InfoComp);