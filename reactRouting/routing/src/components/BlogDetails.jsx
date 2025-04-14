import { useLocation } from "react-router-dom"
import { Header } from "../common/Header"
import { blogs } from "../data/blogs";

export const BlogDetails = ()=>{
  let url = useLocation();
  console.log(url);
  let currId = url.pathname.split('/')[2];
  let currData = blogs.filter((v)=>{
    return v.id==currId
  });
  console.log(currData);
  return(
    <div>
      <Header/>
      <h1>Blog Details</h1>
      <h3>{currData[0].title}</h3>
      <p>{currData[0].desc}</p>
    </div>
  )
}