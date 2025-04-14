import { useState } from 'react'
import './App.css'
import btnModule from './Button.module.css'
import { Questions } from './components/Questions';
import { use } from 'react';
import { FAQs } from './components/FAQs';
import { Notification } from './components/Notification';
import { ToDoList } from './components/ToDoList';
import { ToDoList2 } from './components/ToDoList2';
import { Tabbing } from './components/Tabbing';

function App() {
  // // counter
  // let [count,setCount] = useState(0);
  // let incrementCnt = ()=>{
  //   setCount(count+1);
  // }

  // // paraShow
  // let[pshow,setPshow] = useState(false);
  // let displayP = ()=>{
  //   setPshow(!pshow);
  //   console.log(pshow);
  // }

  // // password hide or show
  // let [passType,setPassType] = useState(false);
  // let changePassType = ()=>{
  //   setPassType(!passType);
  // }

  // // menubar
  // let [menuBar,setMenuBar] = useState(false);

  // // enquiry
  // let [enquiry,setEnquiry] = useState(false);

  // // FAQs
  // let [showAns,setShowAns] = useState(-1);

  // // FAQs 2
  // let [showAnswer,setShowAnswer] = useState(-1);

  return (
    <div>
      {/* <FAQs /> */}
      {/* <Notification /> */}
      {/* <ToDoList /> */}
      <ToDoList2 />
      <Tabbing />
    </div>
  //   <div className='all'>

  //     <div>
  //       <div className='outerBox'>
  //         <h1>Frequently Asked Questions (FAQs)</h1>
  //         {
  //           Questions.map((data,i)=>{
  //             return (
  //               <div className='innerBox' key={i}>
  //                 <h2 onClick={()=>setShowAnswer(data.id)}>{data.question}</h2>
  //                 <p className={showAnswer==data.id?'showAns':''}>{data.answer}</p>
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //     </div>
      
  //     <div>
  //       <div className="faqouter">
  //         <h1>Frequently Asked Questions (FAQs)</h1>
  //         {
  //           Questions.map((faqItem,i)=>{
  //             return <div className="faqItems" key={i}>
  //             <h2 onClick={()=>setShowAns(faqItem.id)} className=''>{faqItem.question}</h2>
  //             <p className={faqItem.id==showAns?'activeAns':''}>{faqItem.answer}</p>
  //           </div>
  //           })
  //         }
  //       </div>
  //     </div>

  //     <div onClick={()=>setEnquiry(false)} className={`modalOverLay ${enquiry?'modalOverLayDisplay':''}`}>
  //     </div>
  //     <div className={`popup ${enquiry?'popupDisplay':''}`}>
  //       <p className='para'>Enquire Now <span><button className='clickCross' onClick={()=>setEnquiry(false)}>&times;</button></span> </p>
  //     </div>
  //     <button onClick={()=>setEnquiry(true)}className='designEnquiry'>{enquiry?'':'Enquiry'}</button>

  //     <div className={`menubar ${menuBar?'':'left'}`}>
  //       <ul>
  //         <li>Home</li>
  //         <li>About</li>
  //         <li>Contact Us</li>
  //         <li>Ask Us</li>
  //       </ul>
  //     </div>
  //     <button className='click' onClick={()=>setMenuBar(!menuBar)}>
  //       {menuBar?<span>&#9776;</span>:<span>&times;</span>}
  //     </button>

  //     <input className='inp' type={passType?'password':'text'}/>

  //     <button onClick={changePassType}>{passType?"Show":"Hide"}</button>

  //     <br />

  //     {pshow?<p>Welcome to The Vardan Tyagi Empire</p>:""}
  //     <button className={pshow?btnModule.error:btnModule.warning} onClick={displayP}>{pshow?"Hide":"Show"}</button>
  //     <p>{count}</p>
  //     <button onClick={incrementCnt}>Increment</button>
  //   </div>
  )
}

export default App