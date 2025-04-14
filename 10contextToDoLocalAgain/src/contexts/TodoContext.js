import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos:[
    {
      id: 1,
      todo: 'sample todo',
      completed: false,
    }
  ],
  addTodo: ()=>{},
  updateTodo: ()=>{},
  deleteTodo: ()=>{},
  toggleComplete: ()=>{}
})

export const TodoContextProvider = TodoContext.Provider

export function useTodo(){
  return useContext(TodoContext)
}