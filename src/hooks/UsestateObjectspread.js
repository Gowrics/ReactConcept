import React, { useState } from 'react'

const UsestateObjectspread = () => {
    const [name ,setName] = useState({firstname :" ",lastname:""});
  return (
    <div>
<input type='text' value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})} />  {/*spread opr  */}
<input type='text' value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
<p> First Name : {name.firstname}</p>
<p> Last Name : {name.lastname}</p>
<p>{JSON.stringify(name)}</p>
    </div>
  )
}
export default UsestateObjectspread

