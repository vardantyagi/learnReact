import { useState } from 'react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './ToDoList.css'
const ToDoList = ()=>{
  let [todoList,setTodoList] = useState([]);
  console.log(todoList);
  let saveToDoList = (e)=>{
    e.preventDefault();
    console.log(todoList);
    let toname = e.target.toname.value.trim();
    if(toname.trim()==''){
      toast.warning("Please Enter a Task!");
      return;
    }
    if(todoList.includes(toname)){
      toast.warning("Task is already added!");
      return;
    }else{
      toast.success("Task Added Successfully!")
      todoList = [...todoList,toname];
      setTodoList(todoList);
    }
  }
  let item = todoList.map((value,i)=>{
    return (
      <TodoListItems value={value} key={i} indexNumber={i} todoList={todoList} setTodoList={setTodoList} />
    )
  })
  return(
    <div>
      <h1 className='heading'>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname' />
        <button>Submit</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {item}
        </ul>
      </div>
      <ToastContainer />
    </div>
  )
}
export {ToDoList};


function TodoListItems({value,indexNumber,todoList,setTodoList}){
  {
    let [status,setStatus] = useState(false);
    let deleteLi = ()=>{
      let finalData = todoList.filter((v,i)=>{
        return i!=indexNumber;
      })
      setTodoList(finalData);
      toast.error("Task Deleted Successfully!");
    }
    let checkStatus = ()=>{
      setStatus(!status)      
    }
    return(    
        <li onClick={checkStatus} className={status?'crossLine':''}>
          {indexNumber+1}. {value} <span onClick={deleteLi}>&times;</span>
        </li>
      )
  }
}