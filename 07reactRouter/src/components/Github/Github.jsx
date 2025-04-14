import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
  const data = useLoaderData();
  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setData(data);
  //     console.log(data);
  //   })
  // },[])
  
  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-white text-3xl'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}