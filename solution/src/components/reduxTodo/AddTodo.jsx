import React,{ useState }  from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../features/reduxTodo/reduxTodoSlice'


function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler= (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <form onSubmit={addTodoHandler} className="flex items-center space-x-2">
    <input 
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text" 
      placeholder="Enter a todo" 
      value={input} 
      onChange={(e) => setInput(e.target.value)} 
    />
    <button 
      type="submit" 
      className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all"
    >
      Add
    </button>
  </form>
  
  )
}

export default AddTodo