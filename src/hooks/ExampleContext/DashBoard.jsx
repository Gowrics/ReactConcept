import React from 'react'
import { useAuth } from './AuthContext'

const DashBoard = () => {
    const user =useAuth();
  return (
    <div>
        <h1>DashBoard</h1>
        {user ? <h2>hai user {user.name}</h2> : <h2>hai user please login</h2>}
    </div>
  )
}

export default DashBoard