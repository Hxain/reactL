import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../../features/reduxTodo/reduxTodoSlice'

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  return (
    <>
    <div className="text-xl font-bold mb-4">Todos</div>
<ul className="space-y-2">
  {todos.map((todo) => (
    <li 
      key={todo.id} 
      className="flex items-center justify-between px-4 py-2 border rounded-lg bg-gray-100"
    >
      <span className="text-gray-800">{todo.text}</span>
      <button 
        onClick={() => dispatch(removeTodo(todo.id))} 
        className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600 transition-all"
      >
        X
      </button>
    </li>
  ))}
</ul>
    </>
  )
}

export default Todos