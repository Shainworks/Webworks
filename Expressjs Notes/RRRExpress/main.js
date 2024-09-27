//Things i'll be learning today
// 1.Handling post & other requests
// 2.Chaining of requests
// 3.Serving HTML files
// 4.Installing Postman
// 5.Express Router
const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')       //i am maintaining the routes of blog over here
const shop = require('./routes/shop')       //i am maintaining the routes of shop over here
app.use(express.static('public'))
app.use('/blog',blog) //whenever it runs it will first display this "Blog home page" as specified in the blog.js
app.use('/shop',shop)//whenever it runs it will first display this "Shop home page" as specified in the shop.js
app.get('/', (req, res) => {
  console.log("Hey it's a get request")
  res.send('Hello World i am a get request')
})
app.post('/', (req, res) => {
    console.log("Hey it's a post request")
    res.send('Hello World i am a post request')
  })
  app.put('/', (req, res) => {
    console.log("Hey it's a put request")
    res.send('Hello World i am a put request')
  })
  //the above requests can be written like this by chaining them together 
//   app.get('/', (req, res) => {
//     console.log("Hey it's a get request")
//     res.send('Hello World i am a get request')
//   }).post('/', (req, res) => {
//       console.log("Hey it's a post request")
//       res.send('Hello World i am a post request')
//     }).put('/', (req, res) => {
//       console.log("Hey it's a put request")
//       res.send('Hello World i am a put request')
//     })
app.put('/', (req, res) => {
    console.log("Hey it's a put request")
    res.send('Hello World i am a put request')
  })
  app.get('/index', (req, res) => {
    console.log("Hey i am a index page")
    // res.sendFile('template/index.html') if i enter this to acces mu file of index.html in template it will htrow me a error saying that i will need to specify the absolute path or mention the root diectory.....so i'll mention the root one below
    res.sendFile('template/index.html',{root: __dirname})
  })
  //we can also send the json file
  app.get('/api', (req, res) => {
    res.json({a:1,b:2,c:3,d:4,name:["darshan","Legend"]})
  })
  //i ahve added a image where i can go through rest of the methods
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
