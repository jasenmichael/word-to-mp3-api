const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require("path");
const morgan = require('morgan')

app.use(morgan('dev'))

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'))
})


app.get('/:searchWord', function (req, res) {
  console.log(req.params);
  let searchWord = req.params.searchWord
  res.json({
    mp3Url: `http://audio.oxforddictionaries.com/en/mp3/${searchWord}_gb_1.mp3`

  })
})

app.listen(process.env.PORT || 3000);
