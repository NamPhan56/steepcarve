const Posts =  require("../../models/blogApp/Posts");
const asyncHandler = require('express-async-handler');

/**
 * Example usage: Create documents in different databases
 * CRUD operations for Blog Posts. For now there should only be a create, delete, and retrieve operations.
 * 
 */

/**
 * create post operation
 */

const createPost = asyncHandler(async(req,res) => {
        console.log("Calling CreatePost")
        const message = req.body.message;

        const postObject = {
            "message": message,
        };
        const post = await Posts.create(postObject)

        if(post){ //created
            res.status(201).json({ message: `New Post created`})
        } else {
            res.status(400).json({ message: `Invalid post data received`})
        }
})


/**
 * Retrive Posts
 */

const getFivePosts = asyncHandler(async(req,res) => {
        console.log("calling getFivePosts")
        const post = await Posts.find().sort({ createdAt: -1 }).limit(5);

        if(post){
            res.status(200).json({ message: `Found 5 recent posts`,
            post
        })
        } else {
            res.status(400).json({ message: `Not able to find 5 recent pots`})
        }
        // const latestDocuments = await Posts.find().sort({ createdAt: -1 }).limit(5);
        // res.json(latestDocuments);
        // console.log(latestDocuments);

        //console.error('Error retrieving latest documents:', error);
    
})

/**
 * update Posts
 * not used
 */

//Update Posts
//not used


/**
 * delete operation
 * deletes all posts after a certain time period
 */
const deleteAllPosts = asyncHandler(async(req,res) => {
        console.log("Calling deleteAllPosts")

        const isDeleted = await Posts.deleteMany()

        if(isDeleted){ //created
            res.status(200).json({ message: `All Posts Deleted`})
        } else {
            res.status(400).json({ message: `No Posts deleted`})
        }
})

module.exports = {
    getFivePosts,
    createPost,
    deleteAllPosts
}