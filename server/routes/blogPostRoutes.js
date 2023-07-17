const express = require('express')
const router = express.Router()
const postsController = require('../controllers/blogApp/postsController')

router.route('/getFivePosts')
    .get(postsController.getFivePosts)
    
router.route('/createPost')
    .post(postsController.createPost)

module.exports = router