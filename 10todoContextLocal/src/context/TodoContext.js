import { useContext,  createContext, useState } from "react";

export const TodoContext = createContext({
  todos : [{
    id:1,
    todo:'task',
    complete: false,
  }],
  addTodo: (todo) => {},
  updateTodo : (id) => {},
  deleteTodo : (id)=>{},
  toggleComplete : (id) => {}

});

export const useTodo = () => {
  return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;