import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
function App() {
  const [themeMode,setThemeMode] = useState('light');
  const lightTheme = ()=>{
    setThemeMode('light')
  }
  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  // actual change in theme

  useEffect(()=>{
    let window = document.querySelector('html');
    window.classList.remove('light','dark');
    window.classList.add(themeMode);
    if(themeMode=='light'){
      window.style.backgroundColor='white'
    }else{
      window.style.backgroundColor='#212121'
    }
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <h1 className='p-4 bg-pink-600 text-3xl'>Chai</h1>

    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App