const express = require('express');
const app = express();


app.get('/', function (req, res,next) {
  res.send('hello world iam omid2')
  next()
})

app.listen(3000 , () => {
  console.log('server ok shod' );
  })
