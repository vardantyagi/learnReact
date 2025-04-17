import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ViewPaste() {
  const url = useLocation().pathname.split('/')[2];
  const allPaste = useSelector((state) => state.pasteReducer.pasteItems);  
  const paste = allPaste.filter((p)=>p._id==url);
  const handleCopy = ()=>{
    navigator.clipboard.writeText(paste[0]?.content);
    toast.success('paste content copied!');
  }
  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input 
          className='p-2 rounded-2xl bg-black mt-2 w-[100%] pl-4'
          type="text" 
          value={paste[0].title}
          disabled
          />
      </div>
      <div className='relative'>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4 bg-black'
            value={paste[0].content}
            rows={20}
            disabled
        />
        <button className='absolute top-7 right-5' onClick={handleCopy}>Copy</button>
      </div>
    </div>
  )
}