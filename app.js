//const express = require('express')
//require('dotenv').config();
/* const app = express()
const hbs = require('hbs'); */
const Server = require('./models/server');
//const port = process.env.PORT;

const server = new Server();


server.listen();


/*   app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) */