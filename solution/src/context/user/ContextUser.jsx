import UserContextProvider from '../user/UserContextProvider.jsx';
import React, {useContext, useState} from 'react';
import  UserContext from './UserContext.js';

function ContextUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };

  if (!user || !user.name) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='bg-gray-600 text-red-300 p-10 rounded-lg'>
          <h1>Login</h1>
          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='rounded-2xl p-5 bg-green-500' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <h3 className='bg-gray-700 text-amber-50 text-5xl p-6 rounded-2xl '>Welcome {user.name}</h3>
    </div>
  );
}

export default function App() {
  return (
    <UserContextProvider>
      <ContextUser />
    </UserContextProvider>
  );
}