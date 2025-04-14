import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let displayAlert = ()=>{
    alert("button clicked!");
  }
  return (
    <div>
      <button onClick={()=>displayAlert()}>Save</button>
    </div>
  )
}

export default App
