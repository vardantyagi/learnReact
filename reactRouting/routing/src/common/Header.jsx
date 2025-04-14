import './Header.css'
import { Link } from 'react-router-dom'
export const Header = ()=>{
  return(
    <div>
      <h1>Header Page</h1>
      <nav>
        <ul>
          {/* <li><a href="/">Home</a></li>
          <li><a href="/about">Home</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Home</a></li> */}
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/courses'}>Courses</Link></li>
          <li><Link to={'/blog'}>Blog</Link></li>
        </ul>
        </nav>
    </div>
  )
}