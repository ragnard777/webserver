const express = require('express')
require('dotenv').config();
const app = express()
const hbs = require('hbs');
const port = process.env.PORT;

//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico...
app.use(express.static('public'));

app.get('/home', (req, res) => {
  res.render('home', {
    nombre: 'Miguelangel',
    apellido: 'Lugo'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Test1',
    titulo: 'tituloTest1'
  });
})


app.get('/generic', (req, res) => {
  res.send(__dirname + '/public/generic.html')
})




app.get('/', (req, res) => {
  res.send('home page')
})

app.get('/hola-mundo',  (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
  })

  app.get('*', (req, res) => {
    console.log(res);
    res.sendFile('public/404.html', { root: __dirname });
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })