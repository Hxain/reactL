import React,{useState, useContext} from 'react'
import UserContext from './user/UserContext';
function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider