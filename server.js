const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.listen(3000)

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})