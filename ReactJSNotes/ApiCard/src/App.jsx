/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    return () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((Response)=>(Response.json()))
      .then((data=>{
        setPost(data)             //remember that response and data are not reserved keywords here
      }))
    };
  }, []);

  return (
    <>
      {post.map(post=>{
       {/* return <Todo todo = {todo}/>*/}      {/*Well if i type thi i will get an error indicating that i haven't given a unique key prop to the lists so i should be selecting a key prop which will be unique to itself and is different from others so i'm using title as a key prop here to make that msg disapper*/}
      //  return <Todo todo = {todo} key={todo.title}/>
      //Well the above one will also wrok but this is considered to be ideal
        return(
          <div className='container' key={post.id}>

          <div key={post.id} className='cards'>
          <div className='todo'>UserId:{post.userId}</div>
          <div className='todo'>ID:{post.id}</div>
          <div className='todo'>Title:{post.title}</div>
          <div className='todo'>Body:{post.body}</div>
          </div>
         
          </div>
        )
      
      })}
    </>
    
  )
}

export default App
