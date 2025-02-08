import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Color from './pages/Color.jsx'
import Password from './pages/Password.jsx'
import Context from './context/Context.jsx'
import Todo from './pages/Todo.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <App />,
//       }
//     ],
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="color" element={<Color />} />
      <Route path="password" element={<Password />} />
      <Route path="context" element={<Context />} />
      <Route path="todo" element={<Todo />} />
    </Route>
  )
)
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
