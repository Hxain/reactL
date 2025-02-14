import { useContext, createContext } from "react";

export const TodoContext = createContext({
     todos:[
        {
            id:0,
            todo:"this is a todo",
            completed:false
        }
     ],
     addTodo : (todo)=>{},
     updateTodo : (todo, id)=>{},
     deleteTodo : (id)=>{},
     toogleComplete: (id)=>{}
});

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider