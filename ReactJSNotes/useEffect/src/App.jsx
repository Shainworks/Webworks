/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
 
 
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setColor] = useState(0)
  
//  useEffect(() => {    //Basically the syntax os useEffect Hook
//   alert("Alert Alert !! Bhago Bnchod")    //triggers when the whole component of the app is fetched into the browser....basiclly empty array for doing this
//  }, [])
 useEffect(() => {    //Basically this hooks is triggered when there is change in the count ...it changes every single time
  alert("Alert Alert !! count change krdiya") //initially we will notice that our alert statement executes twice ..this is beacuse there is a react.strictmode in main.jsx which checks the whole thing twice during development...and it is usually tirned of during production...for now i have commented it off
  setColor(color + 1)
 }, [count])

//  useEffect(()=>{
//   alert("This is only initalzed and the count is not set for it ")
//  },[first])
 
  return (
    <>
    <Navbar color={"olive" + color}/>   //here the color is a incrmenting number whenever the count useEffect hook is Executed..i mean see the code you will understand
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
        <button onClick={() => setCount( count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
