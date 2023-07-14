const mongoose = require('mongoose');
const Posts =  require("../../models/blogApp/Posts");
const asyncHandler = require('express-async-handler');

const blogDB = mongoose.connection.useDb('blogdb');

// Example usage: Create documents in different databases
const Model1 = blogDB.model('Model1', Posts);


//CRUD operations for Blog Posts. For now there should only be a create, delete, and retrieve operations.

//create post operation
const createPost = asyncHandler(async(req,res) => {
    try{


        const message = req.body
        const postObject = { "message": message }

        //create and store new user
        const post = await Posts.create(postObject)

    } catch(error){
        console.error('Error creating post:', error);
    }
})


//Retrive Posts
const getFivePosts =  asyncHandler(async(req,res) => {
    try {
        const latestDocuments = await Posts.find().sort({ createdAt: -1 }).limit(5);
        console.log(latestDocuments);
      } catch (error) {
        console.error('Error retrieving latest documents:', error);
      }
    
})
//Update Posts
//not used


//delete operation
//deletes all posts after a certain time period

module.exports = {
    getFivePosts,
    createPost,
}