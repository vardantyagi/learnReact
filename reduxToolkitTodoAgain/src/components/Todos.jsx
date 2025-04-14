import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo,editTodo } from '../features/todo/todoSlice'


export default function Todos() {
  const [update,setUpdate] = useState("")
  const handleUpdateValues = (todo)=>{
    setUpdate({
      id:todo.id,
      text:todo.text
    })
    console.log(update);
    console.log(update.id);
    console.log(update.text);

  } // ()=>handleUpdateValues(todo)
  const todos = useSelector((state)=>state.todos)
  const dispatch = useDispatch()
  return (
    <>
      <div>Todos</div>
      <ul>
        {
          todos.map((todo)=>{
            return(
              <li key={todo.id}>
                {todo.text}
                <button onClick={()=>(dispatch(editTodo(todo)))}>
                <a href={`/${todo?.id}`}>Edit</a>
                {/* <Link to={`/${todo?.id}`}>Edit</Link> */}
                {/* import router dom */}
                </button>
                <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
// export {update};