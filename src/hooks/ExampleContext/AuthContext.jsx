import React, { createContext, useContext, useState } from 'react'

const AuthContext =createContext();    

const AuthProvider = ({children}) => {
 const [user, setUser] = useState('Dhoni')
 
const login =(username)=>  {
    setUser({name:username});
}
const logout =()=>  {
    setUser(null);
}
    return (
        <AuthContext.Provider value={{user,login,logout}}>
        {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth =()=>  useContext(AuthContext); // useauth used to access AuthContext

