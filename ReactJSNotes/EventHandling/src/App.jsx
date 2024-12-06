/* eslint-disable no-unused-vars */
import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("Darshan")
  const [form, setForm,] = useState({email:"",phone:""});
  const redBtn = useRef(0);
  const handleEvent = () => {
    alert('The button was clicked')
  }
  const handleMouseOver = () => {
     redBtn.current.style.backgroundColor = "pink"
  }
  const handleMouseLeave = () => {
     redBtn.current.style.backgroundColor = "red"
  }
  const handleChange = (e) => {
     setName(e.target.value)
    //  setForm(e.target.value)
    // //  setForm(e.target.name)     //This gives the name specified in the input type form.....well this i can change the vlaue in the field but it will throw me some error in the console so here is the correft version below
    setForm({...form,[e.target.name]:e.target.value})  //here the value of name in input form is coverted into the set of values we type in the field    (...form) ensures the existing values in the form object are preserved  (...form): The spread operator ensures you don’t overwrite the other properties in the form object. For instance, if you updated email, the phone value would remain unchanged.
    console.log(form)     //we will get to see some delays in console.log beacuse setForm is async and it will take some time to do it's job
  }
  return (
    <>
    <div className='button'>
        <button onClick={handleEvent}>Click!!</button>
      </div>
      <div className='red' onMouseOver={handleMouseOver} ref={redBtn} onMouseLeave={handleMouseLeave}>
          Hey hello hi there
      </div>
      {/* <input type='text' value={name} onChange={handleChange} />    When i pass this value it won't be mutable in the field meaning that an user can't change it.....when i add onChange i can change the name in the field provided over there */}
      <input type='text' defaultValue={name} />   {/* To achieve thta mutable state i can also use the defaultValue prop istead of creating a dfunction and doing it  */}
      <input type='text' name='email' value={form.email} onChange={handleChange}/> 
      <input type='text' name='phone' value={form.phone} onChange={handleChange}/> {/* name: Used to identify the field and corresponds to a key in the form state (e.g., email or phone).  */}
      {/* <input type='text' name='email' value={form.email?form.email:""} onChange={handleChange}/> 
      <input type='text' name='phone' value={form.phone?form.phone:""} onChange={handleChange}/>      This also does the same job as the above one but the only difference is that an if or else condition is used here to remove the errors in console*/}       
    </>
  )
}

export default App
