import './App.css'
import { useRef, useState } from 'react';

function App() {
  const [time,setTime] = useState(0);
  const [isRunning,setIsRunning] = useState(false)
  let timeVal = useRef(null)
  const handleTime = ()=>{
    if(!isRunning){
      timeVal.current = setInterval(()=>{
        setTime(time=>time+1)
      },10)
    }else{
      clearInterval(timeVal.current)
      timeVal.current = null
    }
    setIsRunning(!isRunning)
  }
  const resetTime = ()=>{
    clearInterval(timeVal.current)
    setTime(0)
    setIsRunning(false)
  }

  const formatTime = (milliseconds) => {
    let minutes = Math.floor(milliseconds / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let ms = Math.floor((milliseconds % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
};

  return (
    <>
      <h1>Timer</h1>
      <h3>Time: {formatTime(time)}</h3>
      <button onClick={handleTime}>{isRunning?'Stop':'Start'}</button>
      <br />
      <br />
      <button onClick={resetTime}>Reset</button>
    </>
  )
}

export default App