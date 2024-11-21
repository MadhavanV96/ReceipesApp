const express=require('express');


//creating Express Application
const app=express();


app.get('/',(request,response)=>{
response.json({message:'Hello World'});
})


//Listen Request



module.exports=app;
