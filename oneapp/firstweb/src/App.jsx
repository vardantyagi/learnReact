import './App.css'
import Footer from './components/Footer';
import {Header} from "./components/Header";
import {Cards} from "./components/Cards";
import {Api} from "./components/Api";

// import {Container} from 'react-bootstrap';
function App() {
  let headerInfo = {
    email:"vardan@gmail.com",
    name:"vardan"
  }
  console.log(Api);
  
  return (
    <div>
      {/* <Header headerInfo={headerInfo} contact='vardantyagi@gmail.com'>
        <h4>This is Header Section</h4>
      </Header> */}
      {/* <div className='container'>
        <h1 className='text-danger'>Heading 1</h1>
      </div> */}
      <div  className='marginCenter'>
        <div className='cards'>
          {
            Api.map((v,i)=>{
              return <Cards pItems={v} key={i} name="vardan"/>
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

function Card(){
  return(
    <div className='cardItems'>Card section</div>
  )
}