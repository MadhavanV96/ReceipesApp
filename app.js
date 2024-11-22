const express=require('express');
const receipeRouter = require('./routes/receipeRoute');


//creating Express Application
const app=express();

//Add middleware to parse JSON

app.use(express.json())


app.use('/api/v1/receipes',receipeRouter);


//Listen Request



module.exports=app;
