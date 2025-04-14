import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/Home'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import { About } from './components/About'
import { Courses } from './components/Courses'
import { Blog } from './components/Blog'
import { BlogDetails } from './components/BlogDetails'
import { NotFound } from './components/NotFound'
import App from './App'

let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },{
      path:'about',
      element:<About/>
    },{
      path:'courses',
      element:<Courses/>
    },{
      path:'blog',
      element:<Blog/>
    },{
      path:'blog/:id',
      element:<BlogDetails/>
    },{
      path:'*',
      element:<NotFound/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRoutes}/>
    <App />
  </StrictMode>
)
// 6:06:56
