import React from 'react'

export default function Category({finalCategory,setCategoryName}) {
  console.log(finalCategory);
  let Category =  finalCategory.map((v,i)=>{
    return(
      <li onClick={(e)=>setCategoryName(v)} key={i} className='bg-[#CCC] cursor-pointer p-[7px] text-[20px] font-serif font-[500] mb-2'>{v}</li>
    )
  })
  
  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
      <ul>
        {Category}
      </ul>
    </div>
  )
}
