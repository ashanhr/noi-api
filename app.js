const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//express app
const app = express();

//connect to the database
mongoose.connect(process.env.DB_CONNECTION,{ 
    useNewUrlParser: true ,
    useUnifiedTopology: true
} );

const db = mongoose.connection;

db.once('open',()=>{
    console.log("Connected to the mongoDB database...");
});

//Middleware
//Use json body-parser
app.use(bodyParser.json());

//Routes
//root
app.get('/', (req,res)=> {
    res.send("This is the root");
});

//events route
const eventsRoute = require('./routes/Events');

app.use('/events',eventsRoute);


//Starting the server
const PORT = process.env.PORT;  
app.listen(PORT,console.log(`Server runnig on port: http://localhost:${PORT}`));