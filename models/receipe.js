//import mongoose

const mongoose=require('mongoose');

const receipeSchema=new mongoose.Schema({
    name:String,
    ingredients:[String],
    instructions:[String],
    prepTimeMinutes:Number,
    cookTimeMinutes:Number,
    difficulty:{
        type:String,
        enum:['Easy','Medium','Hard'],
        default:'Medium'

    },
    cuisine:String
})



module.exports=mongoose.model('Receipe',receipeSchema,'Receipes');
