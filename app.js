const express = require('express');
const app = express();


app.get('/',(req,res) =>{
    res.send(`Hello world from the server`);
})

app.get('/about',(req,res)=>{
    res.send(`Hello about world from the server`);
})

app.get('/contact',(req,res)=>{
    res.send(`Hello contact world from the server`);
})

app.get('/signin',(req,res)=>{
    res.send(`Hello login world form the server`);
})

app.get('/signup',(req,res)=>{
    res.send(`Hello registration world from the server`);
})

app.listen(3000,()=>{
    console.log(`server is running at port no 3000`);
})