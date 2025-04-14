import { isAction } from '@reduxjs/toolkit'
import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='flex flex-row gap-4 place-content-evenly'>
      <NavLink className={({ isActive }) => (isActive ? "text-red-500 font-extrabold" : "")} to={'/'}>Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to={'/pastes'}>Pastes</NavLink>
    </div>
  )
}