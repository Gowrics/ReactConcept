import React from 'react'
import { useAuth } from './AuthContext'

const Navbar = () => {
  const {user,login,logout} =useAuth();
    return (
    <nav>
      {user ? (
        <>
        <span>Welcome..! {user.name}</span>
        <button onClick={logout}>Logout</button>
        </>
      ):(
        <>
        <button onClick={()=> login('Gowri')}> login as Gowri</button>
        <button onClick={()=> login('John')}> login as Gowri</button>
        </>
      )}

    </nav>
  )
}

export default Navbar