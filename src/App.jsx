import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import NavBar from './components/NavBar'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import bgImage from './assets/intelligent-code-creation.jpg'

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${bgImage})`, backgroundAttachment: 'fixed'}}>
      <NavBar/>
      <Home/>
      <AboutMe/>
    </div>
  )
}

export default App
