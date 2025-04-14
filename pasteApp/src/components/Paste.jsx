// list of all pastes

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../reduxSlice/pasteSlice';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

export default function Paste() {
  const [searchItem,setSearchItem] = useState('');
  // const pastes = JSON.parse(localStorage.getItem('pastes'));
  const pastes = useSelector((state) => state.pasteReducer.pastes)
  console.log(pastes);
  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste)=>paste.title.toLowerCase().includes(searchItem.toLowerCase()));
  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }
  function handleCopy(paste){
    navigator.clipboard.writeText(paste?.content)
    toast.success("text copied!")
  }
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  return(
    <div>
      <input type="search" placeholder='search here' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} className='p-2 rounded-2xl min-w-[600px] mt-5 bg-black' />
      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length>0?
          filteredData.map((paste)=>{
            return(
              <div key={paste?._id} className='border '>
                <div>
                  {paste.title}
                </div>
                <div>
                  {paste.content}
                </div>
                <div className='flex gap-4 place-content-evenly'>
                  <button>
                    <NavLink to={`/?pasteId=${paste._id}`}>
                      Edit
                    </NavLink>
                  </button>
                  <button>
                    <NavLink to={`/pastes/${paste._id}`}>
                    View
                    </NavLink>
                  </button>
                  <button onClick={()=>handleDelete(paste?._id)}>Delete</button>
                  <button onClick={()=>handleCopy(paste)}>Copy</button>
                  {/* share */}
                  <button>Share</button>
                </div>
                <div>
                  {formatDate(paste.createdAt)}
                </div>
              </div>
            )
          }):""
        }
      </div>
    </div>
  )
  // return(
  //   <div>
  //     <ul>
  //     {
  //       pastes.map((paste)=>{
  //         return <li key={paste._id}>{paste.title}</li>
  //       })
  //     }
  //     </ul>
  //   </div>
  // )
}