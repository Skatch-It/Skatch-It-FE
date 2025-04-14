import { useEffect, useState } from 'react'
import Home from './components/home/Home.container'

import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  /* const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch('http://localhost:3002/get')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching data:", err));
  }, []); */
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path="/lobby" element={<LobbyUI/>}></Route>
      <Route path="/{roomID}" element={<LoginUI/>}></Route>
      <Route path="/game/{roomID}" element={<LoginUI/>}></Route> */}
    </Routes>
  )
}

export default App
