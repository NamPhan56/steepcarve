const express = require('express')
const router = express.Router()
const postsController = require('../controllers/blogApp/postsController')

router.route('/getFivePosts')
    .get(postsController.getFivePosts)
    
router.route('/createPost')
    .post(postsController.createPost)

router.route('/deleteAllPosts')
    .delete(postsController.deleteAllPosts)

// router.route('/deleteOldest')
//     .delete(postsController.deleteOldest)

module.exports = router