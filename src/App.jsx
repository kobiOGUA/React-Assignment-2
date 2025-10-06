import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About />
      <Contact />
      <Home />
      <Projects />  
    </>
  )
}

export default App
