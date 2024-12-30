const http = require('http');
const app = require ( './app.js' ) ; 

const port = process.env.PORT || 3000 ; // if the port is not defined in the environment variable, then use 3000


const server = http.createServer(app) ;



server.listen( port , ()=>{
    console.log('The server is running on port ' + port) ;
} ) ; // start the server on the port defined above

