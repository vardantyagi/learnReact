import React , { useContext } from 'react'
import {UserContext} from '../context/UserContext'

export function Profile(){
  let {user} = useContext(UserContext);
  if(user===''){
    return <div>
      Welcome to website
    </div>
  }
  return <div>
    {user.username}
    {user.password}
  </div>
}