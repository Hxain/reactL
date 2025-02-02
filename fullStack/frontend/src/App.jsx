import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
    .then((response) => {
      setUsers(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });
  return (
    <>
      <h1>USERS</h1>
      <h1>USER :{users.length}</h1>
      {
        users.map((user) => (
          <div key={user.id}>
            <h1>{user.gmail}</h1>
            <h1>{user.password}</h1>
          </div>
        ))
      }
    </>
  )
}

export default App
