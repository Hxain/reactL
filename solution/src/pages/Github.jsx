import React, { useState } from 'react'

function Github() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("Hxain");

  const fetchUser = async(e)=>{
    e.preventDefault();
    if(!userName.trim()) return;

    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if(!res.ok) throw new Error("User not found");
      const data = await res.json();
      console.log("data")
      setUser(data);
    } catch (error) {
      console.error(error, "Failed to Fetch data");
      setUser(null);
    }
  }
 
  return (
   
     <div className="p-4 h-screen">
      <form onSubmit={fetchUser} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Search
        </button>
      </form>

      {user && (
        <div className="border p-4">
          <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
          <h2 className="text-lg font-bold">{user.name || user.login}</h2>
          <p>{user.bio || "No bio available"}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>

  )
}

export default Github