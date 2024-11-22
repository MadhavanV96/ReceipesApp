# Receipes App using Node.JS,Express.JS and Mongo DB



## Objective

Developing a complete CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and Mongoose. The application follows the MVC pattern and includes comprehensive API documentation using Postman.

The Link for the API documentation using Postman for the task is attached here for your reference.

## Render Deployment URL 

[Render Deployment](https://receipesappzenclasstask.onrender.com)

## Postman Documentation URL
[Postman Documentation URL:](https://documenter.getpostman.com/view/38692959/2sAYBSkYvH)

## Technologies Used

### Node JS : 
    Backend Server Application
### Express JS :
    Framework of Express JS
### Mongo DB : 
    NoSQL Database
### Mongoosh ( Node Package ) :
    Object modeling tool designed to work in an asynchronous environment
### Postman API :
    API Testing Tool.

## Setting up Backend Application using NodeJS + ExpressJS + MongoDB

    1. Create a new directory
    2. 'npm init' to create package.json file.
    3. 'index.js' -base file -> connect to the  Database
    4. Installing Mongosh. for db connectivity.
    5. Installing Express library using
    ```
    npm install express
    ```
    6. Basic App Setup of Routes using Express  -> app.js
    7. Route url -> app.get('/')
    8. Installed Env package for saving Environment variables . ```javascript npm install dotenv ```
    9. Along with this , we have used MongoDB for database and Postman for testing API's. 
    



## Functionalities

  The following functionalities were achieved,

    a. createRecipe: Create a new recipe.
    b. getAllRecipes: Retrieve all recipes.
    c. getRecipeById: Retrieve a single recipe by ID.
    d. updateRecipe: Update a recipe by ID.
    e. deleteRecipe: Delete a recipe by ID.

## API Endpoints

- `POST /api/v1/receipes` - Create a new recipe
- `GET /api/v1/receipes` - Retrieve all recipes
- `GET /api/v1/receipes/:id` - Retrieve a recipe by ID
- `PUT /api/v1/receipes/:id` - Update a recipe by ID
- `DELETE /api/v1/receipes/:id` - Delete a recipe by ID
