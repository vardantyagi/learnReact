import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos:[
    {
      id:1,
      text:"hello"
    }
  ]
}
export const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo: (state,action)=>{
      state.todos.push({id:nanoid(),text:action.payload})
    },
    removeTodo: (state,action)=>{
      state.todos = state.todos.filter((todo)=>todo.id!=action.payload)
    },
    editTodo: (state,action)=>{
      console.log("updateCalled");
      
      const id = action.payload.id
      console.log(id);
      
      const textToUpdate = action.payload.text
      console.log(textToUpdate);
      state.todos = state.todos.map((todo)=>todo.id==id?{...todo,text:textToUpdate}:todo)
    }
  }
})
export const { addTodo,removeTodo,editTodo } = todoSlice.actions
export default todoSlice.reducer