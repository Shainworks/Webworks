import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';//universally unique identifiers (UUIDs).
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {
  const [todo, setTodo] = useState("");     //i'll use this state to input my text 
  const [todos, setTodos] = useState([]);   //And i'll use this state to store my text
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))    //localStorage.getItem("todos"): Retrieves the JSON string stored under the key "todos".
      //JSON.parse: Converts the JSON string back into an array of objects.
      setTodos(todos)
    }       //This will only retrieve the itens if it is present in the localstorage or else this function will not work and if i don;t give this condition i will get some error which won't load my normal page
  }, []);
  const saveToLS =() => {
    localStorage.setItem("todos",JSON.stringify(todos))   //Purpose of JSON.stringify: Converts the todos array into a JSON string, which is a text-based format suitable for storing in local storage.
  }
  const handleAdd = () => {
    setTodos([...todos, { id:uuidv4(),todo, isCompleted: false }])      //here a new object todo is created
    setTodo("")       //if i don't do this the input field will persist the characters tehere so in order to type new charaters i'll have to make it empty again
    saveToLS()
  }
  const handleEdit = (id) => {
    let t = todos.filter(item=>{
      return item.id === id
    });
    setTodo(t[0].todo)        //the first matched is the one and only id matched so t[0] is the only one present there which is referred like that to access that element....then it is used to set as the value of the todo state and This allows the selected todo's text to appear in the input field so the user can edit it.
    let newTodos =todos.filter(item=>{
      return item.id!=id
    }); 
    setTodos(newTodos); 
    saveToLS()
  }
  const handleDelete = (id) => {
    let newTodos =todos.filter(item=>{
      return item.id!=id
    }); 
    setTodos(newTodos); 
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
    saveToLS()
  }
  const handleCheckbox = (e)=>{
    let id = e.target.name;  // Step 1: Retrieve the ID of the clicked checkbox
    let index = todos.findIndex(item => item.id === id); // Step 2: Find the index of the corresponding todo item in the array
    let newTodos = [...todos]; // Step 3: Create a copy of the current todos array
    newTodos[index].isCompleted = !newTodos[index].isCompleted; // Step 4: Toggle the isCompleted property of the corresponding todo
    setTodos(newTodos); // Step 5: Update the state with the modified todos array
    saveToLS()
  }
  return (
    <>
    <Navbar />
    <div className="container mx-auto bg-gradient-to-br from-cyan-500 to-blue-500 my-5 p-10 rounded-2xl min-h-[80vh] shadow-lg">
      <div className="addTodo mb-8">
        <h2 className='text-2xl font-bold text-white mb-4'>Add a Todo</h2>
        <div className="flex gap-4">
          <input onChange={handleChange} value={todo} type="text" className='w-2/3 p-3 rounded-md border-none shadow-md focus:outline-none focus:ring-2 focus:ring-teal-300' />
          <button onClick={handleAdd} disabled={todo.length <= 3} className=' bg-teal-700 hover:bg-teal-500 p-3 px-6 text-white font-semibold transition-all rounded-md shadow-md disabled:bg-gray-400'>Add</button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Your Dumb Remainders</h2>
        <div className="todos space-y-4">
          {todos.length == 0 ? <p className="text-lg text-gray-100">No todo list found</p> : ""}
          {todos.map(item => {
            return (
              <div className="todo flex items-center justify-between bg-white p-4 rounded-lg shadow-md" key={item.id}>
                <div className="flex items-center gap-4">
                  <input type="checkbox" onChange={handleCheckbox} checked={item.isCompleted} name={item.id} id="" className="w-6 h-6" />
                  <div className={`text-lg font-medium ${item.isCompleted ? "line-through text-gray-500" : ""}`}>{item.todo}</div>
                </div>
                <div className="buttons flex gap-2">
                  <button onClick={() => { handleEdit(item.id) }} className=' bg-yellow-500 hover:bg-yellow-400 p-2 px-4 text-white font-semibold transition-all rounded-md shadow-md'>Edit</button>
                  <button onClick={() => { handleDelete(item.id) }} className=' bg-red-500 hover:bg-red-400 p-2 px-4 text-white font-semibold transition-all rounded-md shadow-md'>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </>
  )

}

export default App
