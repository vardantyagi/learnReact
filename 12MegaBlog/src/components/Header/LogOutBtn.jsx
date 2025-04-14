import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import { logout } from '../../store/authSlice'

export default function LogOutBtn() {
  const dispatch = useDispatch();
  const logoutHandeler = ()=>{
    
  }
  return (
    <div>LogOutBtn</div>
  )
}