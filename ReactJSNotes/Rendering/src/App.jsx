/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title:"Muthi",
      desc:"have to stop"
    },
    {
      title:"Studies",
      desc:"Have to increase"
    },
    {
      title:"Food",
      desc:"Have to eat healthy"
    }
  ]);
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true);
  //i have just demonstarted a method where we can write the compenent in the same file itself where Todo is a component well this is not ideal i'll also indicate the ideal one below
  // const Todo = ({todo})=>{
  //   return(
  //     <>
  //     <div className='todo'>{todo.title}</div>
  //     <div className='todo'>{todo.desc}</div>
  //     </>
  //   )
  // }

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
        <button onClick={() => setshowbtn(!showbtn)}>     {/*Now what happens is whenever i click this the value of showbtn changes hence acts as a toggle switch for the apperence of btn to be shown or not*/}
          Show the button
        </button>
       {/* {showbtn? <button>My appearence depends on the showbtn useState</button>:"The state is set to false"}  */}  {/*Well this solves the purpose of what we are trying to do which is conditional rendering but there are better ways */}
       {showbtn ? <button>showbtn is set to true</button>:<button>showbtn is set to false</button> }      {/*The meaning of this is that the button only appesrs when showBtn is set to true*/}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/*There is  a special technique to render lists in React which is portrayed below*/}
      {todos.map(todo=>{
       {/* return <Todo todo = {todo}/>*/}      {/*Well if i type thi i will get an error indicating that i haven't given a unique key prop to the lists so i should be selecting a key prop which will be unique to itself and is different from others so i'm using title as a key prop here to make that msg disapper*/}
      //  return <Todo todo = {todo} key={todo.title}/>
      //Well the above one will also wrok but this is considered to be ideal
        return(
    
          <div key={todo.title}>
          <div className='todo'>{todo.title}</div>
          <div className='todo'>{todo.desc}</div>
          </div>
         
        )
      
      })}
    </>
  )
}

export default App
