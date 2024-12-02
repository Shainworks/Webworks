import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//useref is used when u want a var to persist it's value even during the time of rerender
function App() {
  const [count, setCount] = useState(0)
  // let a = 0    the a value is not persisted so below method useref is used
  const a = useRef(0);    //whenever the value of useref is changed then useEffect doesnot trigger or the component is not rerndered
useEffect(() => {
  return () => {
    a.current = a.current + 1         //here to use the useRef we use .current  as the reference to the variable
    // a = a+1     the a value is not persisted so below method useref is used
    console.log(`Hey hello i rerender whenever the state changes and it is ${a.current}`)      //Rerenders whenever or whatever state changes and rerender even when page refreshes
    //here a will not be able to hold it's value bcoz  in React the components function gets re-executed whenever the state or props change Each time the App function is called the a variable is re-initialized to 0 so any changes made to a during the previous render are lost. this is where useRef hook comes in play
  };
});

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
        <button onClick={() => setCount((count) => count + 1)}>
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
