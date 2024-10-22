import mongoose from "mongoose"
const todoSchema = new mongoose.Schema({
    title: {type:String,require:true,default:"Udhar likhna lowde"},     //Here i can be more specific with the types like if i leave the title 
    //empty then it will take the default text setted over here and display that
    Desc: String,
    isDone: Boolean
  });
  export const Todo = mongoose.model('todo', todoSchema);