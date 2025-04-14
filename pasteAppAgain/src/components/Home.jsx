import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes } from '../pasteSlice/pasteSlice';
import { updateToPastes } from '../pasteSlice/pasteSlice';
import { toast } from 'react-toastify';

export default function Home() {
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const dispatch = useDispatch();
  const [searchParams,setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const allPastes = useSelector((state)=>state.pasteReducer.pasteItems);  
  const paste = {
    title:title.trim(),
    content:content.trim(),
    _id: pasteId?pasteId:Date.now(),
    createdAt: new Date().toISOString()
  }
  useEffect(()=>{
    if(pasteId){
      const pasteToUpdate = allPastes.filter((p)=>p._id==pasteId);
      setTitle(pasteToUpdate[0]?.title)
      setContent(pasteToUpdate[0]?.content)
    }
  },[pasteId])
  const createPaste = (addNew=false)=>{
    if(paste.title==''){
      toast.error('please enter valid title!')
      return
    }
    const index = allPastes.findIndex((p)=>p.title.toLowerCase()==paste.title);
    if(index>=0){
      toast.error('this paste exist already!')
      return
    }
    if(pasteId && addNew==false){      
      dispatch(updateToPastes(paste));
    }else{
      if(addNew==true){
        const newPaste = {
          title:title.trim(),
          content:content.trim(),
          _id: Date.now(),
          createdAt: new Date().toISOString()
        }
        dispatch(addToPastes(newPaste))
      }else{
        dispatch(addToPastes(paste));
      }
    }
    setTitle('');
    setContent('');
    setSearchParams({});
  }
    return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input 
          type="text" 
          className='p-2 rounded-2xl bg-black mt-2 w-[71%] pl-4'
          placeholder='enter title here' 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
          <button 
            className='p-2 rounded-2xl text-green-500 bg-black mt-2'
            onClick={createPaste}
            >
            {
              pasteId?'Update Paste':'Add Paste'
            }
          </button>
          {
            pasteId && <button className='p-2 rounded-2xl text-green-500 bg-black mt-2' onClick={()=>createPaste(true)}>Add New</button>
          }
      </div>
      <div>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4 bg-black'
          placeholder='enter description here'
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}