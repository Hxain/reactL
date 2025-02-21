import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen flex items-center justify-center ">
    <div className="backdrop-blur-lg p-8 rounded-2xl shadow-xl w-96 border border-white/20 bg-gray-900">
      <h1 className="text-2xl font-bold text-white text-center mb-6">
        Click the links to explore 🚀
      </h1>
      
      <div className="grid grid-cols-2 gap-4">
        <Link to="color" className="btn bg-amber-500 hover:bg-amber-600">🎨 Color</Link>
        <Link to="password" className="btn bg-blue-500 hover:bg-blue-600">🔑 Password</Link>
        <Link to="context" className="btn bg-green-500 hover:bg-green-600">🧠 Context</Link>
        <Link to="todo" className="btn bg-purple-500 hover:bg-purple-600">📝 Todo</Link>
        <Link to="reduxtodo" className="btn bg-red-500 hover:bg-red-600">🔥 Redux Todo</Link>
        <Link to="github" className="btn bg-gray-700 hover:bg-gray-800">🐙 Github</Link>
      </div>
    </div>
  </div>
  
  );
}

export default Home;
