/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import User from './components/User'

function App() {
  //Today we will learn about routing in React 
  //Let us first know  why it is a problem to use anchor tag....if you use anchor tag the page will reload which is not the case when you use react routing
  //In react routing the page doesn't reload at all which gives a seamless experience to the user 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home/></>
    },
    {
      path: "/Login",
      element: <><Navbar /><Login/></>
    },
    {
      path: "/About",
      element: <><Navbar /><About/></>
    },
    {
      path: "/User/:username",
      element: <><Navbar /><User/></>
    },
  ])

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
