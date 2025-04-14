import { useState } from 'react'
import './PassWordGenerator.css'
import { ToastContainer, toast } from 'react-toastify';
import { SC , UC , LC , NC } from '../passwordData/PassChar';
export const PassWordGenerator = ()=>{

  // .....................Random Password Generator.....................

  let [uppercase,setUppercase] = useState(false);
  let [lowercase,setLowercase] = useState(false);
  let [number,setNumber] = useState(false);
  let [symbol,setSymbol] = useState(false);
  let [passLen,setPassLen] = useState(10);
  let [finalPassWord,setFinalPassword] = useState('');

  let createPassword = ()=>{
    if(uppercase || lowercase || number || symbol){
      let finalPass = ''; // final password
      let charSet = '';
      if(uppercase) charSet += UC;
      if(lowercase) charSet += LC;
      if(number) charSet += NC;
      if(symbol) charSet += SC;

      for(let i=0;i<passLen;i++){
        finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length))        
      }
      displayPassword(finalPass);
      
    }else{
      toast.error('Please select atleast one checkbox!');
      return;
    }
  }

  let displayPassword = (finalPass)=>{
    setFinalPassword(finalPass);
  }

  let copyPassword = ()=>{
    navigator.clipboard.writeText(finalPassWord);
    toast.success('Copied');
  }

  return(
    <div>
      {/* .....................Random Password Generator...........*/}

      <div className='passwordOuter'>
        <div className='passwordBox'>
          <h2>Password Generator</h2>
          <div className='passwordBoxin'>
            <input type="text" readOnly value={finalPassWord} />
            <button onClick={copyPassword}>Copy</button>
          </div>
          <div className="passLength">
            <label htmlFor="">Password Length:</label>
            <input type="number" min={10} max={20} value={passLen} onChange={(e)=>setPassLen(e.target.value)} />
          </div>
          <div className="passLength">
            <label htmlFor="">Include uppercase letters</label>
            <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
          </div><div className="passLength">
            <label htmlFor="">Include lowercase letters</label>
            <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
          </div><div className="passLength">
            <label htmlFor="">Include numbers </label>
            <input type="checkbox" checked={number} onChange={()=>setNumber(!number)} />
          </div><div className="passLength">
            <label htmlFor="">Include symbols</label>
            <input type="checkbox" checked={symbol} onChange={()=>setSymbol(!symbol)} />
          </div>
          <div className='btnDiv'>
            <button className='btn' onClick={createPassword}>
              Generate Paassword
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}