const express = require('express')
const app = express()


app.use(express.static('public'))

// app.get('/',  (req, res)=> {
//   res.send('Home page')
// })

// app.get('/hola-mundo',  (req, res) => {
//   res.send('Hola mundo')
// })

app.get('/generic',  (req, res) => {
    //   res.send('404| pagenot foud')
      res.sendFile(__dirname + '/public/generic.html')
    })
app.get('/elements',  (req, res) => {
    //   res.send('404| pagenot foud')
      res.sendFile(__dirname + '/public/elements.html')
    })

app.get('*',  (req, res) => {
//   res.send('404| pagenot foud')
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(8080)