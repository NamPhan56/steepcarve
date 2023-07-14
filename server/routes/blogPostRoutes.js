const express = require('express')
const router = express.Router()
const postsController = require('../controllers/blogApp/postsController')

router.route('/')
    // .get(postsController.getAllUsers)
    .get(postsController.getFivePosts)
    .post(postsController.createPost)
    // .patch(postsController.updateUser)
    //.delete(postsController.deleteUser)

module.exports = router