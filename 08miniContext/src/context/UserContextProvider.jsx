import React, { useState } from 'react'
import {UserContext} from './UserContext';
import Login from '../components/Login';
import {Profile} from '../components/Profile';

// export default function UserContextProvider({children}) {
export default function UserContextProvider() {
  let [user,setUser] = useState('');
  return (
    <UserContext.Provider value={{user,setUser}} >
      {/* {children} */}
      <Login/>
      <Profile/>
      
    </UserContext.Provider>
  )
}