require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parcials');
app.use(express.static('public'))

app.get('/',  (req, res)=> {
  res.render('home',{nombre:'Franklin Salas',
                      titulo:'Curso Node'});
});

// app.get('/hola-mundo',  (req, res) => {
//   res.send('Hola mundo')
// })

app.get('/generic',  (req, res) => {
    //   res.send('404| pagenot foud')
      res.render('generic',{nombre:'Franklin Salas',
      titulo:'Curso Node'
    });
    });



    app.get('/elements',  (req, res) => {
      //   res.send('404| pagenot foud')
        res.render('elements',{nombre:'Franklin Salas',
        titulo:'Curso Node'});
      });

app.get('*',  (req, res) => {
//   res.send('404| pagenot foud')
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port ,() =>{ console.log('running port : ' + port)});