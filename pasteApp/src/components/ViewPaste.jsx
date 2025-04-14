import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ViewPaste() {
  const pasteId = useLocation().pathname.split('/')[2]
  const allPastes = useSelector((state)=>state.pasteReducer.pastes);
  
  const paste = allPastes.filter((paste)=>paste._id===pasteId)[0];

  function handleCopy(){
    navigator.clipboard.writeText(paste.content);
    toast.success('copied to clipboard!')
  }
  
  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input type="text"
          className='p-2 rounded-2xl bg-black mt-2 w-[100%] pl-4'
          placeholder='enter title here'
          value={paste.title}
          disabled
        />
      </div>
      <div className='mt-8 relative'>
        <textarea
        className='rounded-2xl mt-4 min-w-[500px] p-4 bg-black'
          value={paste.content}
          placeholder='enter content here'
          rows={20}
          disabled
        />
        <button className='absolute top-7 right-5' onClick={handleCopy}>Copy</button>
      </div>
    </div>
  )
}