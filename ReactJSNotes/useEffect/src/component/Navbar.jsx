/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import React from 'react'

const Navbar = ({color}) => {
  // Case 1: Run on every render 
  useEffect(() => {
    alert("Hey I will run on every render")   //whenever the navbar component is rendered this msg is popped ...it happens everytime the count is changed
  })

  // Case 2: Run only on first render 
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  }, [])

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])

  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {    //The usecase of this is very rare
      alert("component was unmounted")      //if i comment out the navbar component decalration in app.jsx then this will pop up...usually it is used for condtional rendering which will be learnt in the coming days
    }
  }, [])
  return (
    <div>
      Hey i am a navbar of this {color} color
    </div>
  )
}

export default Navbar
