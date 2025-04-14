import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

// let router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:'',
//         element: <Home/>
//       },{
//         path:'about',
//         element: <About/>
//       },{
//         path:'contactus',
//         element: <ContactUs />
//       },{
//         path:'user/:id',
//         element: <User/>
//       },{
//         loader:{githubInfoLoader},
//         path:'github',
//         element: <Github/>
//       },{
//         path:'*',
//         element: <NotFound/>
//       }
//     ]

//   }
// ])

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contactus' element={<ContactUs/>} />
      <Route path='user/:id' element={<User/>} />
      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)