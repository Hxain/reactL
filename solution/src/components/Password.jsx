import {useCallback, useEffect, useRef, useState} from 'react'


function Password() {
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed]= useState(false);
  const [specialAllowed, setSpecialAllowed]= useState(false);
  const [length, setLength  ]= useState(8);

  const passRef =  useRef(null);

  const createPassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789";
    if(specialAllowed) str += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor((Math.random() * str.length) + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  },[length, numAllowed, specialAllowed]);

  const copyPass = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    createPassword()
  },[length, numAllowed, specialAllowed])
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col gap-5 items-center w-96">
  
      <div className="flex w-full items-center gap-3">
        <input
          className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={password}
          placeholder="Generated Password"
          ref={passRef}
          readOnly
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={copyPass}
        >
          Copy
        </button>
      </div>
  
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <input
            type="range"
            className="cursor-pointer w-full"
            min={8}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <span className="text-gray-300 p-4">Length {length}</span>
        </div>
  
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="checkNum"
            className="w-5 h-5 accent-blue-600"
            checked={numAllowed}
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="checkNum" className="text-gray-300">Include Numbers</label>
        </div>
  
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="checkSpecial"
            className="w-5 h-5 accent-blue-600"
            checked={specialAllowed}
            onChange={() => setSpecialAllowed((prev) => !prev)}
          />
          <label htmlFor="checkSpecial" className="text-gray-300">Include Special Characters</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Password