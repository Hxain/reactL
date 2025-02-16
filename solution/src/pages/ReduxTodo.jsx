import React from 'react'
import AddTodo from '../components/reduxTodo/AddTodo'
import Todos from '../components/reduxTodo/Todos'
import { Provider } from 'react-redux'
import { reduxStore } from '../app/reduxTodoStore/reduxStore'

function ReduxTodo() {
  return (
    <Provider store={reduxStore}>
    <div className=' h-screen'>
      <AddTodo/>
      <Todos/>
    </div>
    </Provider>
  )
}

export default ReduxTodo