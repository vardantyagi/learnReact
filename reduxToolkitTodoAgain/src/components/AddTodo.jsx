import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';


export default function AddTodo() {

  const [todo,setTodo] = useState('');
  const dispatch = useDispatch();

  function handleInput(e){
    e.preventDefault();
    dispatch(addTodo(todo))
    setTodo('')
  }
  return (
    <>
      <div>AddTodo</div>
      <form onSubmit={handleInput}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  )
}