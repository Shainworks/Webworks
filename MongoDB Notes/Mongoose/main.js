//Mongoose is nthg but a package used to kind of link express and mongodb and there are built-in validation adn we can impose schema's using mongoose 
//for ex if i want a data field to be string then i can enforce it using mongoose ......which cannot be done in mongodb alone
//By imposing these conditions it improves the security of our applications so mongodb is important
import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/todo.js"
let x = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ Desc: "And i'm serious about it", isDone: false })
    //if suppose i give title:1 then it will convert it into titele:"1" so it follows the schema perfectly
    todo.save()
    res.send('Hello World!')
})
app.get('/a', async (req, res) => { 
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, Desc: todo.Desc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})