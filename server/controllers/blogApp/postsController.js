const Posts =  require("../../models/blogApp/Posts");
const asyncHandler = require('express-async-handler');

// Example usage: Create documents in different databases

//CRUD operations for Blog Posts. For now there should only be a create, delete, and retrieve operations.

//create post operation
const createPost = asyncHandler(async(req,res) => {
        console.log("Calling CreatePost")
        const postObject = { "message": "Creating New Posts" };

        res.json(postObject);

        // //create and store new user
        // const post = await Posts.create(postObject)
        // console.error('Error creating post:', error);
})


//Retrive Posts
const getFivePosts =  asyncHandler(async(req,res) => {
        console.log("calling getFivePosts");
        const post = await Posts.find();
        res.json(post);
        console.log(post);
        // const latestDocuments = await Posts.find().sort({ createdAt: -1 }).limit(5);
        // res.json(latestDocuments);
        // console.log(latestDocuments);

        //console.error('Error retrieving latest documents:', error);
    
})
//Update Posts
//not used


//delete operation
//deletes all posts after a certain time period

module.exports = {
    getFivePosts,
    createPost
}