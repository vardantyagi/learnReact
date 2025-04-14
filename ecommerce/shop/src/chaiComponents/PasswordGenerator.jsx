import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function () {
  let [length,setLength] = useState(8);
  let [numbersAllowed,setNumbersAllowed] = useState(false);
  let [charAllowed,setCharAllowed] = useState(false);
  let [password,setPassword] = useState('');

  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWZYAabcdefghijklmnopqrstuvwxyz';
    if(numbersAllowed) str += '0123456789';
    if(charAllowed) str += '!@#$%^&*-_+=[]{}~`';
    for(let i=0;i<length;i++){
      pass += str.charAt(Math.floor(Math.random()*str.length));
    }
    setPassword(pass);
  },[length,numbersAllowed,charAllowed,setPassword]);
  // passwordGenerator();

  useEffect(()=>{
    passwordGenerator();
  },[length,numbersAllowed,charAllowed,passwordGenerator])

  // useRef hook
  let passwordRef = useRef(null);

  let copyPassword = useCallback(()=>{
    passwordRef.current?.select(); // select the copied text
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 p-4'>
        <h1 className='text-center text-3xl text-white mb-3'>Password Generator</h1>
        <div className=' mx-auto flex shadow rounded-lg overflow-hidden mb-[20px]'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-gray-300' placeholder='Password' readOnly ref={passwordRef} />
          <button className='bg-blue-600 p-2 text-lg font-bold' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"  id='range' min={6} max={100} value={length} onChange={(e)=>setLength(e.target.value)} />
            <label htmlFor="range">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={numbersAllowed} id="numberInput" onChange={()=>setNumbersAllowed((prev)=>!prev)} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={charAllowed} id="charInput" onChange={()=>setCharAllowed((prev)=>!prev)} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}