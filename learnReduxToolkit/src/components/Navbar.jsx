import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
  Navbar Value of counter id {count}
    </div>
  )
}

export default Navbar