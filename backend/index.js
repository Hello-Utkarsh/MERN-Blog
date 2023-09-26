const express = require('express')
const ConnectToMongo = require('./db')
const app = express()
// const expressValidator = require('express-validator')
const port = 3000

ConnectToMongo()
app.use(express.json())
// app.use(expressValidator())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth', require('./routes/user'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})