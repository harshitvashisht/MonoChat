
import express from "express"
import mongoose from "mongoose";

const app = express ();
app.use (express.json())

async function main (){

    await mongoose.connect('')
    .then(()=>console.log('connected to mongoose'))
    .catch((err)=>console.log('Not Connected'))
}

app.get ('/signup' , (req, res)=>{
      
})

main()
app.listen (3000)
