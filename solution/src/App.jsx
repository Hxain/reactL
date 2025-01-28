import { useState } from 'react'


function App() {
  let [count, setCount] = useState(0)

  const increase = () => {
    if(count < 20){
      setCount(count + 1)
    }
  }
  const decrease = () => {
    if(count > 0){
      setCount(count - 1)
  }
}
  return (
    <>
    <h1>Count increase decrese</h1>
    <h2>{count}</h2>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </>
  )
}

export default App
