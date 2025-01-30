import { useState } from "react"

function Color() {
    const [color, setColor] = useState('bg-gray-800');

  return (

    <div  className='bg-gray-800 text-white h-screen w-screen flex justify-center place-items-center space-x-4 duration-[5000ms]' style={{backgroundColor: color}}>
        <button onClick={()=> setColor('blue')} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Blue</button>
        <button onClick={()=> setColor('red')} className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'>Red</button>
        <button onClick={()=> setColor('green')} className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'>Green</button>
    </div>

  )
}

export default Color