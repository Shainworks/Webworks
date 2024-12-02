/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const btnref = useRef(0);   
useEffect(() => {
  return () => {
    console.log(`First rendering`)    
    btnref.current.style.backgroundColor = "violet"      //the reference given for the button is manipulated here
  };
},[]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>   {/* Now another usecase of useRef is that i can use it to refer an element of html where i will not be needing DOM to do it */}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{btnref.current.style.display = "none"}}>Disapper Count</button><br/><br/>
      <button onClick={()=>{btnref.current.style.display = "block"}}>Reapper Count</button>    {/*This is how i use the btnref to manipulate it from anywhere i want */}
    </>
  )
}

export default App
