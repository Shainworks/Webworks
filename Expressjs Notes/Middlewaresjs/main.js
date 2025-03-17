const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
//here we gonna learn about middlewares 
//Basically undersatnd that it modifies our request
// app.use(express.static("public"))       //this is use of middleware where reponse and request takes place at the same place
//express.static is an built-in middleware
//the below block of code explains the syntax of writing an middleware
app.use((req, res, next)=>{     //this is my middleware1 - this will be the logger for our application
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`) //we should always use synchronus functions with middlewares or it will jump to next() function and execute it while our asynchronus function would be running in background if in case used
    console.log(`${Date.now()} is a ${req.method}`)
    req.darshan = "darshan must be worshipped"
    // res.send("Now as i have sent an reponse m1 gets the request first so the below responses won't work")
    //Now ideally the above line is not preferred beacuse when the response is sent there is no point into pointing into next middleware so basically it will throw an error....if you don't want the error to be thrown you can remove the next function and again it is not ideal
    next()   //Now when i comment our this next function it will not jump into the next middleeware and will leave the browser hanging
    //so in order to jumpt into the next middleware we will have to use next()
})
//the order is also very important in middleware it is same has how variable works
app.use((req, res, next)=>{     //this is my middleware2
    console.log('m2')
    next()
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!' + req.darshan)  //i can call the the request function over here which is defined in the middlewares 
    //and middlewares are used like that where you can stack up every request in one middleware
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//And types of middlewares are:-
// Application-level middleware: This is bound to an instance of the Express application using app.use() or app.METHOD().
// app.use((req, res, next) => {
//     console.log('Application-level middleware');
//     next();
// });
// Router-level middleware: This works the same way as application-level middleware but is bound to an instance of express.Router(). This is useful for organizing middleware specific to particular routes.
// const router = express.Router();
// router.use((req, res, next) => {
//     console.log('Router-level middleware');
//     next();
// });
// Built-in middleware: Express has some built-in middleware like express.static(), express.json(), and express.urlencoded() for handling static files, JSON data, and URL-encoded data.
// Third-party middleware: Many third-party middleware libraries are available for various tasks like logging, security, session handling, etc. Examples include morgan for logging, helmet for security headers, and cookie-parser for handling cookies.
// const morgan = require('morgan');
// app.use(morgan('dev'));  // Third-party middleware for logging
✔️ Logging
✔️ Authentication
✔️ Error Handling
✔️ Parsing Request Data
✔️ Modifying Requests/Responses
