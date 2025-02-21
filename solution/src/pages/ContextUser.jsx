import UserContextProvider from '../context/user/UserContextProvider.jsx';
import React, {useContext, useState} from 'react';
import  UserContext from '../context/user/UserContext.js';

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
      <div className="h-screen flex justify-center items-center bg-gray-900">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 w-96">
          <h1 className="text-3xl font-bold text-white text-center mb-6">Login</h1>
    
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-3 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
    
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
    
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 transition-all py-3 rounded-lg text-white text-lg font-semibold shadow-lg hover:scale-105 active:scale-95"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }    
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <h3 className="bg-white/10 backdrop-blur-lg text-white text-4xl p-6 rounded-2xl shadow-xl border border-white/20">
        Welcome, {user.name}! 🎉
      </h3>
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