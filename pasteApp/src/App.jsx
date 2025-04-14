import React from 'react';
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: '/pastes',
      element: 
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path: '/pastes/:id',
      element: 
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    },
  ]
)
function App() {
  return (
    <>
      <RouterProvider router={router}>
      <h1 className='text-2xt bg-pink-500'>Hello Doston, We are going to create a paste web application</h1>
      </RouterProvider>
    </>
  )
}

export default App