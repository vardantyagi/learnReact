import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeFromPastes, resetAllPastes } from '../pasteSlice/pasteSlice';
import { NavLink } from 'react-router-dom';

export default function Pastes() {
  const dispatch = useDispatch();
  const [searchItem,setSearchItem] = useState('');
  const allPastes = useSelector((state) => state.pasteReducer.pasteItems)
  const filteredData = allPastes.filter((p)=>p.title.toLowerCase().includes(searchItem.toLowerCase()));
  function handleCopy(paste){
    navigator.clipboard.writeText(paste.content);
    toast.success('paste copied successfully!')
  }
  function handleDelete(id){
    dispatch(removeFromPastes(id))
  }
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div>
      <input type="search" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} placeholder='search here'
      className='pl-5 p-2 rounded-2xl min-w-[600px] mt-5 bg-black mr-5'
      />
      <button className='p-2 rounded-2xl text-green-500 bg-black mt-5' onClick={()=>dispatch(resetAllPastes())}>Remove All</button>
      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length>0?
          filteredData.map((paste)=>{
            return(
              <div key={paste._id} className='border rounded-2xl'>
                <div className='mb-2 mt-2'>
                  {paste.title}
                </div>
                <div className='mb-2 mt-2'>
                  {paste.content}
                </div>
                <div className='flex gap-4    place-content-evenly mb-2 mt-2'>
                  <button>
                    <NavLink to={`/?pasteId=${paste._id}`}>Edit</NavLink>
                  </button>
                  <button>
                    <NavLink to={`/pastes/${paste._id}`}>View</NavLink>
                  </button>
                  <button onClick={()=>handleCopy(paste)}>Copy</button>
                  <button onClick={()=>handleDelete(paste._id)}>Delete</button>
                  <button>Share</button>
                </div>
                <div className='mb-2 mt-2 pt-[60px] pb-[60px]'>
                  {formatDate(paste.createdAt)}
                </div>
              </div>
            )
          })
          :
          <div className='border rounded-2xl'>
            <h2 className='text-3xl font-bold text-green-500 pt-[60px] pb-[60px]'>No Paste Found</h2>
          </div>
        }
      </div>
    </div>
  )
}