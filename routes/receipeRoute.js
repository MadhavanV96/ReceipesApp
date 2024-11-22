//import express
const express=require('express');
const receipeController = require('../controllers/receipeController');

const receipeRouter=express.Router();

receipeRouter.get('/',receipeController.getAllRecipes);
receipeRouter.get('/:id',receipeController.getRecipeById);
receipeRouter.post('/',receipeController.createRecipe);
receipeRouter.put('/:id',receipeController.updateRecipe);
receipeRouter.delete('/:id',receipeController.deleteRecipe);



module.exports=receipeRouter;