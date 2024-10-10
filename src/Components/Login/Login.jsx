import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      if (username && password) {
      // waitting data from backend
        }

      }
  return (
    <div className="login flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="border p-6 rounded shadow-md">
        <h2 className="mb-4 text-lg font-bold">Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border rounded p-2 mb-2 w-full"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border rounded p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full"><Link to='main'>login</Link></button>
      </form>
    </div>
  )
}
