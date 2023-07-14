const express = require('express')
const router = express.Router()
const path = require('path')

//Get requests
//only match if the requested route is only a slash
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','public', 'index.html'))
    //look in the views folder for the "index.html" file
})

module.exports = router