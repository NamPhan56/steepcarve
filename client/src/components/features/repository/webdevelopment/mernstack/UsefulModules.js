<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Modules Repository</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script type="module" src="https://md-block.verou.me/md-block.js"></script>
    <!-- "< = &lt;" and "> = &gt;" -->
</head>
<body>
    <header>
        <h1>Useful Node Packages</h1>
    </header>
    <main>
        <md-block>
            # [mongoose-sequence]( https://www.npmjs.com/package/mongo-sequence)

            ## Install Command
                npm i mongoose-sequence
                
            ## Summary
            
            - Used to set numbers to a sequence to mongodb
            - Implements the code described in (http://docs.mongodb.org/manual/tutorial/create-an-auto-incrementing-field/) as a small nodejs module.
            
            ## Usage
            ```
            const AutoIncremeent = req('mongoose-sequence')(mongoose)

            const noteSchema = new mongoose.Schema({

            })

            noteSchema.plugin(AutoIncrement, {
                inc_field: 'ticket',
                id: 'ticketNums',
                start_seq:500
            })
            ```
            ---
        </md-block>

        <md-block>
            # [express-async-handler](https://www.npmjs.com/package/express-async-handler) 

            ## Summary
                Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
                Useful for reducing try-catch code

            ## Install command
                npm i express-async-handler
                yarn add express-async-handler

            ## Usage
            ```
            const asyncHandler = require('express-async-handler')

            express.get('/', asyncHandler(async (req, res, next) => {
                const bar = await foo.findAll();
                res.send(bar)
            }))
            ```
            ---
        </md-block>

        <md-block>
            # [bcrypt](https://www.npmjs.com/package/bcrypt)

            ## Summary
                Used to encrypt a string, usually to store as a password

            ## Install command
            ```
            npm i bcrypt
            ```

            ## Usage
            ```
            const bcrypt = require('bcrypt');
            const saltRounds = 10;
            const myPlaintextPassword = 's0/\/\P4$$w0rD';
            const someOtherPlaintextPassword = 'not_bacon';



            ```
            ---
        </md-block>
    </main>
</body>
</html>