const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin){ //only origins in postman or the array can access
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }

    },

    crendtials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions