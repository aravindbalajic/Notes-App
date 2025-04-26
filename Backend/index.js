const express = require('express');
const notes = require('./data/notes')
const dotenv = require('dotenv');
const connectDB = require('./models/db');
const cors = require('cors')
//const User= require('./models/users')
const userRoute = require('./routes/userRoute')

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
dotenv.config();
connectDB();



app.get('/',(req,res)=>{
    res.send("Hello From backend");
    console.log("Helo bknd");
})

/*app.get('/notes',(req,res)=>{
    res.send(notes);
    console.log(notes);
})

app.get("/notes/:id",(req,res)=>{
    const note=notes.find((n)=>n._id === req.params.id);
    res.send(note);
    console.log(note);
})*/

app.use('/user',userRoute);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server Started running at port:"+PORT);
});