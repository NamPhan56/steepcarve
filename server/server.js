require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')

const cookieParser = require('cookie-parser')

const cors = require('cors')
const corsOptions = require('./config/corsOptions')

const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const { logEvents } = require('./middleware/logger')



const PORT = process.env.POR || 4000

console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))
//allow json receving and parsing
app.use(express.json())

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))

//issues here with routing
app.use('/blogApp', require('./routes/blogPostRoutes'));

//const blogAppController = require('./controllers/blogApp/postsController');
//app.get('/blogApp/getFivePosts', blogAppController.getFivePosts);

app.all('*',(req,res) => {
    //responds with a 404 status
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'public', '404.html'))
    }
    else if (req.accepts('json')){
        res.json({message: '404 Not Found'})
    }
    else {
        res.type('txt').send(('404 not found'))
    }
})

app.use(errorHandler)

//mongo connection
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))
})

//error logging on mongdb connection error
mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})