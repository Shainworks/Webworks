import mongoose from "mongoose"
import express from "express"
import { Gen } from "./models/generator.js"
let x = await mongoose.connect("mongodb://localhost:27017/gen")
const app = express()
const port = 3000

app.get('/', async(req, res) => {
    await Gen.deleteMany({})
    const generateddata = []
    for (let i = 0; i < 10; i++){
    let rand = Math.random()
    let name,language,city,IsMAnager;
    let salary = Math.floor(Math.random() * 1000000)
    let managerRand = Math.floor(Math.random() * 10)
    if (rand<0.33) {
        name = "Dhrub"
    } else if(rand<0.66 && rand>=0.33){
        name = "Shubham"
    }else if(rand<0.99 && rand>=0.66){
        name = "Shokeeb"
    }
    if (rand<0.33) { 
        language = "Hindi"
    } else if(rand<0.66 && rand>=0.33){
        language = "Kannada" 
    }else if(rand<0.99 && rand>=0.66){ 
        language = "Dongri"
    }
    if (rand<0.33) {
        city = "Rajori"
    } else if(rand<0.66 && rand>=0.33){
        city = "Jaammu"
    }else if(rand<0.99 && rand>=0.66){
        city = "Kashmir"
    }
    if(managerRand > 5){
        IsMAnager = true
    }
    else{
        IsMAnager = false
    }
  const gen = new Gen({Name:name,
    Language: language,
    City: city,
    Salary:salary,
    isManager:IsMAnager,
})
    generateddata.push(gen)
    await gen.save()
}
res.json(generateddata) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//Every single line is thought and written by Mr.Darshan MS