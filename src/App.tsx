import { useEffect, useState } from 'react'
import LoginUI from './login/Login.container'
import './App.css'

function App() {
  // const [message, setMessage] = useState("")

  // useEffect(()=>{
  //   fetch('http://localhost:3002/api')
  //     .then(res => res.json())
  //     .then(data => setMessage(data.message))
  //     .catch(err => console.error("Error fetching data:", err));
  // }, []);
  return (
    <div>
      <LoginUI/>
    </div>
  )
}

export default App
