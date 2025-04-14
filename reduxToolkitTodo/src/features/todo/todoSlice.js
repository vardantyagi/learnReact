import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id: 1,
    text: 'hello world'
  }]
}

function sayHello(){
  console.log("hello world");
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // sayHello:  sayHello,
    addTodo: (state,action)=>{
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo);
    },
    removeTodo: (state,action)=>{
      const id = action.payload
      state.todos = state.todos.filter((todo)=>todo.id!==id)
    },
    updateTodo: (state,action)=>{
      const id = action.payload.id
      const text = action.payload.text
      state.todos = state.todos.map((todo)=>todo.id===id?{id:id,text:text}:todo)
    }
  }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer