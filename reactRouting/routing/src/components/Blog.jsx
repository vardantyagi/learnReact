import { Header } from "../common/Header"
import { blogs } from "../data/blogs"
import { Link } from "react-router-dom"
export const Blog = ()=>{
  let allBlogs = blogs.map((v,i)=>{
    return (
      <div key={i} className="blogItem">
        <h3>{v.title}</h3>
        <p>{v.desc}</p>
        <button><Link to={`/blog/${v.id}`}>Read More</Link></button>
      </div>
    )
  })
  return(
    <div>
      <Header/>
      <h1>Blog Page</h1>
      <div className="container">
        {allBlogs}
      </div>
    </div>
  )
}