import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment, incrementByAmount, multiply } from './redux/counter/counterSlice'
function App() {
  const count = useSelector((state) => state.counter.value)
  console.log(count);
  const dispatch = useDispatch()

  
  return (
    <>
      <Navbar/>
      <div>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(multiply())}>x</button>
      currently count is {count}
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(incrementByAmount(6))}>++</button>
      </div>
    </>
  )
}

export default App
