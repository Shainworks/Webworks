const fs = require("fs")
console.log("starting")
// fs.writeFileSync("darshan.txt","Hey darsshan here")         //When this line of code executes then the next line executes which is not a good approch
fs.writeFile("darshan2.txt","Hey darsshan here with 2.0 version", ()=>{
    console.log("done")
    //here the above line is scheduled so js doesn't wait for it and executes next set of lines
    fs.readFile("darshan2.txt",(error,data)=>{
        console.log(error, data.toString())
    })
})
//if i continue to do the same things then it will become a callback hell
//below code to append text
fs.appendFile("darshan.txt","Hey i am an appended text",(e,d)=>{
    console.log(d)
})
console.log("Ending")

//now i am changing the type to module so tis syntax will not work to make it work you will have to remove the type:"module" in package.json file
