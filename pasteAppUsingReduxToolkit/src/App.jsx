import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'
import Navbar from './components/Navbar'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
        <div>
          <Navbar/>
          <Home/>
        </div>
    },
    {
      path:'/pastes',
      element:
        <div>
          <Navbar/>
          <Pastes/>
        </div>
    },
    {
      path:'/pastes/:id',
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
        <h1 className='bg-red-500 underline'>Hello Ji</h1>        
      </RouterProvider>
    </>
  )
}

export default App