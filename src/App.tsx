import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch('http://localhost:3002/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching data:", err));
  }, []);
  return (
    <div>
      <h1>React + Vite + Express 연동</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
