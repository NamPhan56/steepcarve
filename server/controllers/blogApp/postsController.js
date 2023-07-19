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
        //console.log("Calling CreatePost")
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
        deleteOldest();
})


/**
 * Retrive Posts
 */

const getFivePosts = asyncHandler(async(req,res) => {
        //console.log("calling getFivePosts")
        const post = await Posts.find().sort({ createdAt: -1 }).limit(5);

        if(post){
            res.status(200).json(post)
        } else {
            res.status(400)
        }
})

/**
 * update Posts
 * not used
 */


/**
 * deletes all posts operation
 */
const deleteAllPosts = asyncHandler(async(req,res) => {
        //console.log("Calling deleteAllPosts")

        const isDeleted = await Posts.deleteMany()

        if(isDeleted){ //created
            res.status(200).json({ message: `All Posts Deleted`})
        } else {
            res.status(400).json({ message: `No Posts deleted`})
        }
})

/**
 * Deletes all posts except the 5 required to display                   
 */
const deleteOldest = asyncHandler(async(req,res) => {
    //console.log("Calling deleteOldest")
    
    const postsToDelete = 30;
    const totalDocs = await Posts.countDocuments({});

    if((totalDocs-5) > postsToDelete){
        //console.log("there are at least 30 documents, deleting")
        const oldDocs = await Posts.find().sort({ createdAt: 1 }).limit(postsToDelete);

        // Delete the oldest documents
        const oldestDocumentIds = oldDocs.map((doc) => doc._id);
        await Posts.deleteMany({ _id: { $in: oldestDocumentIds } });

    }
})

module.exports = {
    getFivePosts,
    createPost,
    deleteAllPosts,
 }