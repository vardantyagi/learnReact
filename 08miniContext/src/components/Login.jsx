import React,{ useState , useContext} from 'react'
import {UserContext} from '../context/UserContext'

export default function Login(){
  let [username,setUsername] = useState('');
  let [password,setPassword] = useState('');
  let {setUser} = useContext(UserContext);
  function handleSubmit(e){
    e.preventDefault();
    setUser({username,password});
  }
  return(
    <>
      <h2>Login</h2>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
      {' '}
      <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}