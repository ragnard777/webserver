console.log("Hola mundo");
const http = require('http');
http.createServer((req,res) =>{
    //mensaje en el status
    //res.writeHead(404)
    res.setHeader('Content-Disposition', 'attachment; filename=lista2.csv')

    //res.writeHead(404, {'Content-Type':'text/plain'})
    //res.writeHead(404, {'Content-Type':'application/json'})
    res.writeHead(200, {'Content-Type':'application/csv'})
    //El cuerpo de la respuesta.
    //res.write('page not found');
    res.write('id,nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Maria\n');
    res.write('3, Juan\n');
    //sin esto no funciona.
    res.end();
}).listen(8080);

console.log('Escuchando el puerto',8080);