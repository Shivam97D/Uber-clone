const dotenv = require('dotenv');
dotenv.config() ; // load the environment variables from the .env file
const express = require( "express" ) ;  
const app = express()  ;    // create an express application
const cors = require( "cors") ;    
app.use( cors() ) ; // allow cross-origin requests



app.get( "/" , ( req , res ) =>{    
    res.send( "hellow world ") ;    
})



module.exports = app ;