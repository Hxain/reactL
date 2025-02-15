import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='h-screen flex items-center justify-center '>
      <div className='flex flex-col items-center justify-center bg-gray-600 w-80 p-6 rounded-2xl space-y-4 shadow-lg'>
        <h1 className='text-2xl font-bold text-white'>Click the links to see the Pages</h1>
        <Link to="color" className='text-lg text-white px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 transition'>COLOR</Link>
        <Link to="password" className='text-lg text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition'>PASSWORD</Link>
        <Link to="context" className='text-lg text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition'>CONTEXT</Link>
        <Link to="todo" className='text-lg text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition'>Todo</Link>
      </div>
    </div>
  );
}

export default Home;
