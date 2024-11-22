
//import receipe model

const Receipe = require('../models/receipe');



const receipeController = {
    getAllRecipes: async (request, response) => {
        try {
            const receipes = await Receipe.find();
            response.status(200).json(receipes)


        }
        catch (error) {
            response.status(500).json({ message: error })
        }
    },
    getRecipeById: async (request, response) => {
        try {
           const {id}=request.params;
           const receipe=await Receipe.findById(id);
           if(!receipe){
            response.status(404).json({message:"Receipe Not Found"})
           }
           response.status(200).json(receipe);
        }
        catch (error) {
            response.status(500).json({ message: error })
        }
    },
    createRecipe: async (request, response) => {
        try{
            const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, difficulty, cuisine } = request.body;


            const newReceipe = new Receipe({
                name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, difficulty, cuisine
            })
            await newReceipe.save();
            response.status(201).json({message:"Record Updated Successfully"})
    

        }
        catch(error){
            response.status(500).json({message:error});
        }

    },
    updateRecipe: async (request, response) => {
        try {
            const receipe = await Receipe.findByIdAndUpdate(request.params.id, request.body, { new: true });
            if (!receipe) {
                return response.status(404).json({ message: 'Receipe not found' });
            }
            response.status(200).json({message:"Receipe Updated Successfully"});
        } catch (error) {
            response.status(400).json({ message:error });
        }
    },
    deleteRecipe: async (request, response) => { 
        try { 
            const {id}=request.params;
            const receipe=await Receipe.findByIdAndDelete(id);
            if(!receipe){
                return response.status(404).json({ message: 'Receipe not found' });
            }
            response.status(200).json({message:"Receipe Deleted successfully"})
        }
        catch (error) {
            response.status(500).json({ message: error })
        }
    }
}

module.exports = receipeController;