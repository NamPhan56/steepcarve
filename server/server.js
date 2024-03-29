const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')

const cookieParser = require('cookie-parser')

const cors = require('cors')
const corsOptions = require('./config/corsOptions')

const PORT = process.env.POR || 4000

app.use(logger)

app.use(cors(corsOptions))
//allow json receving and parsing
app.use(express.json())

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, '/client/public')))

app.use('/', require('./routes/root'))

app.all('*',(req,res) => {
    //responds with a 404 status
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'client','public', '404.html'))
    }
    else if (req.accepts('json')){
        res.json({message: '404 Not Found'})
    }
    else {
        res.type('txt').send(('404 not found'))
    }
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))