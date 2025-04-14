import { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])
  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* outlet */}
        </main>
        <Footer/>
      </div>
      test
    </div>
  ):null;
}

export default App


// npm i @reduxjs/toolkit react-redux react-router-dom appwrite html-react-parser react-hook-form
// npm i @tinymce/tinymce-react --legacy-peer-deps 