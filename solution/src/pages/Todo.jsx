import React, { useState } from 'react'
import TodoComponent from '../components/TodoComponent'
import { TodoProvider } from '../context/todo/TodContext';
function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=> {
    setTodos((prev)=>[{id:Date.now, ...todo},...prev])
  };

  const updateTodo = (id, todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>(prev.id === id ? todo : prevTodo)))
  };

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id)
  )};

  const toogleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prev, completed : !prevTodo.completed} : prevTodo))
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toogleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="flex flex-wrap gap-y-3">
                        <TodoComponent/>
                    </div>
                </div>
            </div>
    </TodoProvider >
  )
}

export default Todo