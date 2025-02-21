import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import Layout from './Layout.jsx';
import './index.css';

import { Home, Color, ContextUser, Github, Password, ReduxTodo, Todo } from "./pages"






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
      <Route path="context" element={<ContextUser />} />
      <Route path="todo" element={<Todo />} />
      <Route path="reduxtodo" element={<ReduxTodo />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
)
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
