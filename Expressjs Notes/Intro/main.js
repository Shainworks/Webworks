//So basically expressjs is used to build web application using nodejs
//And it is also used to minimize the code
const express = require('express')
const app = express()
const port = 3000
//usually our code is not available for people to make it available we will have to use a middleware of express to set it to public
//if i out my every single file in public directory then all mu source code will be availbale in the web
app.use(express.static('public'))
// Basicaly the syntax:- app.get(path, handler) or app.post(path, handler) or app.put(path, handler) or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello Darshan')
})
app.get('/about', (req, res) => {
    res.send('Hello this is a about page')
  })

  app.get('/contact', (req, res) => {
    res.send('Hello this is a contact page')
  })

  app.get('/blog', (req, res) => {
    res.send('Hello this is darshan\'s blog')
  })
  //throwa error when entered a path which is not defined for ex:- if i enter http://127.0.0.1:3000/darsh/ 
  //it will throw errpr has "Cannot GET /darsh/" in web page itself
  //now i can't sit nd write the endpoints to every page so we will just create a variable called slug which will take any endpoint i enter and won't throw any error
  app.get('/blog/:onev/:secondv', (req, res) => { 
        // logic to fetch {onev} and {secondv} from the db
    res.send(`Hello this is darshans ${req.params.onev} and the next endpoint is ${req.params.secondv}`)
    // For URL: http://127.0.0.1:3000/blog/asdasdas/sdfsdf?mode=white&region=uk
    console.log(req.params) // will output { onev: 'asdasdas', secondv: 'sdfsdf' }
    console.log(req.query) // will output { mode: 'white', region: 'uk' }  this returns queires in object form which is specified after "?"
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})