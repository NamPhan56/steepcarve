<!DOCTYPE html>
<html lang="en">
    <head>    
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Getting Started with React</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <script type="module" src="https://md-block.verou.me/md-block.js"></script>
        <!-- "< = &lt;" and "> = &gt;" -->
    </head>
    <body>

        <header>
            <h1>Steps for Getting Started with a React Web App</h1>
        </header>
        <main>
            <md-block>
                
                # About
                - These are the basic steps for starting a React Web App including Github Repository setup

                ---
            </md-block>

            <md-block>
                # Setup React App Structure

                1. Navigate to a directory you want to host your react app
                2. Use this command to install and setup a react app struture:
                    - ```
                        npx create-react-app reactapp
                        ```
                     - Note: you cannot use capitals in your name
                    - In "src" folder, create a "components" folder
                ---
            </md-block>

            <md-block>
                # [Install React Router Dom](https://www.npmjs.com/package/react-router-dom)

                ## Summary
                    The react-router-dom package contains bindings for using React Router in web applications.
                    Please see the Getting Started guide for more information on how to get started with React Router.

                ## Steps
                1. Use this command to install the package
                    - ```
                        npm i react-router-dom
                        ```
                2. Add this code to "src/index.js"
                    - ```
                        import { BrowserRouter, Routes, Route} from 'react-router-dom';

                        &lt;React.StrictMode&gt;
                            &lt;BrowserRouter&gt;
                                &lt;Routes&gt;
                                    &lt;Route path="/*" element={&lt;App /&gt;} /&gt;
                                &lt;/Routes&gt;
                            &lt;/BrowserRouter&gt;
                        &lt;/React.StrictMode&gt;
                        ```
                    - This will allow nested routes
                3. Adjust code in "App.js"
                    - ```
                        import { Routes, Route } from 'react-router-dom'

                        import './App.css';
                        import Layout from './components/Layout'
                        
                        function App() {
                        return (
                            &lt;Routes&gt;
                            &lt;Route path="/" element={&lt;Layout /&gt;}&gt;
                            &lt;/Route&gt;
                            &lt;/Routes&gt;
                        );
                        }
                        
                        export default App;
                        ```
                4. In "src/components" create a "Layout.js" file and fill with
                    - ```
                        import  { Outlet } from 'react-router-dom'

                        const Layout = () =&gt; {
                            return (
                                &lt;Outlet /&gt;
                            )
                        }
                        
                        export default Layout
                        ```
                    - This renders the children of the Outlet component
            </md-block>

            <md-block>
                # Setup Github Repository
                1. Install [Github Deskop](https://desktop.github.com/) and [Git](https://git-scm.com/downloads)
                    - Note: Github Desktop is optional, but makes pushing easier
                2. In VS Code, navigate into "reactapp" folder
                3. Initiate Git:
                    - ```
                        git init
                        ```
                4. Make a .gitignore file and add:
                    - ```
                        node_modules
                        ```
                5. Open Github Desktop > "File" > "Add Local Repository" > and type in the directory of "reactapp"
                6. Use Github Desktop to push to your repository.
                    - Note: this assumes you are already signed in using your github account
                7. Setup tracking for your main branch:
                    1. ```
                        git add .
                        ```
                    2. ```
                        git commit -m "some comment"
                        ```
                    3. ```
                        git push -u origin main
                        ```
                8. Create new branch and checkout
                    1. ```
                        git checkout -b "branch name"
                        ```
                    2. ```
                        git add .
                        ```
                    3. ```
                        git commit -m "some comment about current branch"
                        ```
                    4. ```
                        it push -u origin branchname
                        ```
                ---
            </md-block>
            
            <md-block>
                ## Install Express
                1. In VS Code and in the "reactapp" directory, use command:
                    - ```
                        npm i express
                        ```

                ## Install and setup nodemon
                1. In VS Code and in the "reactapp" directory, use command: 
                    - ```
                        npm i nodemon -D"
                        ```
                    - "-D" will set the dependency as "Developer"
                2. Edit package.json's "Scripts" section to look like this:
                    - ```
                        "scripts": {
                            "start": "node server",
                            "dev": "nodemon server -e js,html,css",
                            "test": "echo \"Error: no test specified\" && exit 1"
                        },
                        ```
                3. Start nodemon with:
                    - ```
                        npm run dev
                        ```
                    - runs in dev mode
                
                ## Create Folders
                - public
                  - css
                - views
                - routes

                ## Setup sever.js
                1. In your "reactapp' folder, create a server.js File
                2. Fill it with
                    - ```
                        const express = require('express')
                        const app = express()
                        const path = require('path')
                        const PORT = process.env.POR || 3500
                        
                        
                        app.use('/', express.static(path.join(__dirname, '/public')))
                        
                        app.use('/', require('./roues/root'))
                        
                        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
                        ```

                ## Create root.js file
                Create this in the routes folder:
                    - ```
                        const express = require('express')
                        const router = express.Router()
                        const path = require('path')
                        
                        //only match if the requested route is a slash
                        router.get('^/$|/index(.html)?', (req, res) => {
                            res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
                        })
                        
                        module.exports = router
                        ```
            </md-block>

            <md-block>
                # Installing and Setting up CORS(Cross Origin Resource Sharing)
                1. Install
                    - ```
                        npm i cors
                        ```
                2. In Server.js
                    - ```
                        const cors = require('cors')
                        app.use(cors())
                        ```
                
                # Securing CORS
                1. Create a directory called "config"
                    - AllowedOrigins.js
                        - ```
                            //local host that we will accept to access our restapi

                            const allowedOrigins = [
                                'http://localhost:3000',
                                'https://www.dandrepairshop.com',
                                'https://dandrepairshop.com'
                            
                            ]
                            
                            module.exports = allowedOrigins
                            ```
                    - corsOptions.js
                        - ```
                            const allowedOrigins = require('.allowedOrigins')

                            const corsOptions = {
                                origin: (origin, callback) => {
                                    if (allowedOrigins.indexOf(origin) !== -1 || !origin){ //only origins in or postman the array can access
                                        callback(null, true)
                                    } else {
                                        callback(new Error('Not allowed by CORS'))
                                    }
                            
                                },
                            
                                crendtials: true,
                                optionsSuccessStatus: 200
                            }
                            
                            module.exports = corsOPtions
                            ```
                    - Edit server.js
                        - ```
                            const corsOptions = require('./config/corsOptions')
                            app.use(cors(corsOptions))
                            ```
                ---
            </md-block>

            <md-block>
                # Installing and Configuring MongoDB

                1. Install dotenv
                    - ```
                        npm i dotenv
                        ```
                    - This will let us use environment variables in our REST API
                2. Add to top of server.js
                    - ```
                        require('dotenv').config()
                        ```
                3. Create a ".env" file at the server.js level directory
                    - Fill it with:
                        - ```
                            NODE_ENV=development
                            ```
                    - Now you can log it:
                        - ```
                            console.log(process.env.NODE_ENV)
                            ```
                4. Add ".env" file to ".gitignore"
                5. Add database uri to .env file:
                    - ```
                        DATABASE_URI=""
                        ```

                ## Setting up MongoDB

                1. Go to MongodB "https://www.mongodb.com/"
                2. Create your account or sign in to an existing one
                3. Create or use an existing cluster
                4. Create a Project
                5. Create a Database and a starting Collection
                    - use "Shared" for free tier
                6. Create Database Access User
                    - Allow read and write permissions to databases
                    - or any kind of permissions as needed
                7. Connect your cluster
                    - Choose "Connect your application"
                    - Copy the connection string and paste into ".env" file
                        - replace "&lt;username&gt;" with database user
                        - replace "&lt;password&gt;" with mongodb db access user password
                        - add db name in front of the "\?"

                ## Install Mongoose
                1. Install Mongoose into vscode
                    - ```
                        npm i Mongoose
                        ```
                        
                ## Setting up Data Models
                1. create the "Models" folder at the project's root
                2. create a data models file, like "Users.js"
                    - ```
                        const mongoose = require('mongoose')

                        const userSchema = new mongoose.Schema()
                        ```
                3. Fill "Users.js" with a schema like this:
                    - ```
                        const mongoose = require('mongoose')

                        //data model
                        const userSchema = new mongoose.Schema({
                            username: {
                                type: String,
                                required: true
                            },
                            password: {
                                type: String,
                                required: true
                            },
                            //users can have more than one role, thus using an array
                            roles: [{
                                type: String,
                                default: "Employee"
                            }],
                            active: {
                                type: Boolean,
                                default: true
                            }
                        
                        })
                        
                        module.exports = mongoose.model('User', userSchema)
                        ```

                ## Connect to DB

                1. In "config" directory, create a "dbConn.js" file
                    - ```
                        const mongoose = require('mongoose')

                        const connectDB = async() => {
                            try {
                                await mongoose.connect(process.env.DATABASE_URI)
                            } catch(err) {
                                console.log(err)
                            }
                        }

                        module.exports = connectDB
                        ```
                2. In "server.js"
                    - ```
                        const connectDB = require('./config/dbConn')
                        const mongoose = require('mongoose')

                        connectDB()


                        mongoose.connection.once('open', () => {
                            console.log('Connected to MongoDB')
                            app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
                        })

                        mongoose.connection.on('error', err => {
                            console.log(err)
                            logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
                        })
                        ```
            </md-block>

            <md-block>
                # Useful packages to Install

                - mongoose-sequence
                - https://www.npmjs.com/package/mongo-sequence
                    - ```
                        npm i mongoose-sequence
                        ```
                    - Used to set numbers to a sequence to mongodb
                    - Add inside of a schema.js
                        - ```
                            const AutoIncremeent = req('mongoose-sequence')(mongoose)

                            const noteSchema = new mongoose.Schema({

                            })

                            noteSchema.plugin(AutoIncrement, {
                                inc_field: 'ticket',
                                id: 'ticketNums',
                                start_seq:500
                            })
                            ```
            </md-block>

        </main>
    </body>
</html>
