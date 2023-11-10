const express = require('express');
require('dotenv').config();
const cors = require('cors');


class Server {

    constructor(){
        this.app = express();
        const port = process.env.PORT;

        // Middlewares.
        this.middlewares();

        //Rutas de mi aplicacion.

        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors())
        //Lectura y parseo del body
        this.app.use(express.json())
        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){
        
      this.app.use('/api/usuarios', require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(process.env.PORT, () =>{
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }

}

module.exports = Server;