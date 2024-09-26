import fs from "fs/promises"
let a = await fs.readFile("darshan.txt")
let b = await fs.appendFile("darshan.txt","\n\n Hey i am written using promises it's so easy without any callbacks")
console.log(a.toString(),b)