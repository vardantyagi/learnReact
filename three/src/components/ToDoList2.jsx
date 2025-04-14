import { useState } from 'react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './ToDoList2.css'
export function ToDoList2(){
  let [allTasks,setAllTasks] = useState([]);
  const addTask = (e)=>{
    e.preventDefault();
    let input = e.target.inputName.value.trim();
    if(input==''){
      toast.warning('Please Enter a Valid Task!');
      return;
    }
    else if(allTasks.includes(input)){
      toast.warning('Task already added!');
      return;
    }else{
      toast.success('Task Added Successfully!');
      allTasks = [...allTasks,input];
      setAllTasks(allTasks);
    }
    console.log(allTasks);
  }
  let tasks = allTasks.map((data,i)=>{
    return (
      <AddATask data={data} key={i} index={i} allTasks={allTasks} setAllTasks={setAllTasks} />
    )
  })
  return(
    <div>
      <h1 className="heading">ToDo List</h1>
      <form onSubmit={addTask}>
        <input type="text" name='inputName' />
        <button>Submit</button>
      </form>

      <div className='outerDiv'>
        <ul>
          {tasks}
        </ul>
      </div>
    </div>
  )
}

function AddATask({data,index,allTasks,setAllTasks}){
  let [isCompleted,setIsCompleted] = useState(false);
  function deleteTask(){
    let filteredTasks = allTasks.filter((e,i)=>{
      return i!=index;
    })
    console.log(filteredTasks);
    toast.error('Task Deleted Successfully!');
    setAllTasks(filteredTasks);
  }
  function checkIsCompleted(){
    setIsCompleted(!isCompleted);
  }
  return(
    <li onClick={checkIsCompleted} className={isCompleted?'crossLine':''}>
      {index+1}. {data} <span onClick={deleteTask}>&times;</span>
    </li>
  )
}