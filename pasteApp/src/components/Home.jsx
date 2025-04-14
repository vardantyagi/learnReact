import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../reduxSlice/pasteSlice';
import { toast } from 'react-toastify';

export default function Home() {
  const [title,setTitle] = useState('');
  const [value,setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId'); // ex => http://localhost:5173/?pasteId=c%20kjwe
  const  dispatch = useDispatch();

  const allPastes = useSelector((state)=>state.pasteReducer.pastes);
  
  useEffect(()=>{
    if(pasteId){
      const paste = allPastes.find((p)=>p._id===pasteId);
      setTitle(paste.title)
      setValue(paste.content)
    }
  },[pasteId])

  function createPaste(addNew = false){
    console.log(addNew);
    
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }
    if(pasteId && addNew==false){
      // update
      dispatch(updateToPastes(paste))
      console.log('paste updated'); 
    }else{
      console.log('paste will be created');
      // create
      // add a check -> Paste already exist or not
      const pasteFoundOrNot = allPastes.filter((p)=>p.title.toLowerCase()===paste.title.toLowerCase());      
      console.log(pasteFoundOrNot);
      
      if(pasteFoundOrNot.length>0){
        toast.warning('paste exist already!')
        setTitle('');
        setValue('');
        setSearchParams({});
        return;
      }
      if(addNew==true){
        const newPaste = {
          title: title,
          content: value,
          _id: Date.now().toString(36),
          createdAt: new Date().toISOString(),
        }
        dispatch(addToPastes(newPaste))
        setTitle('');
        setValue('');
        setSearchParams({});
        return;
      }
      dispatch(addToPastes(paste))
    }
    // after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div>
      {/* <h1>Home</h1> */}
      <div className='flex flex-row gap-7 place-content-between'>
        <input type="text"
          className='p-2 rounded-2xl bg-black mt-2 w-[63%] pl-4'
          placeholder='enter title here'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <button className='p-2 rounded-2xl text-green-500 bg-black mt-2' onClick={()=>createPaste()}>{pasteId?'Update My Paste':'Create My Paste'}</button>
        {pasteId?<button className='p-2 rounded-2xl text-green-500 bg-black mt-2' onClick={()=>createPaste(true)}>Add New</button>:''}
      </div>
      <div className='mt-8'>
        <textarea
        className='rounded-2xl mt-4 min-w-[500px] p-4 bg-black'
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          placeholder='enter content here'
          rows={20}
        />
      </div>
    </div>
  )
}