const express = require('express')
const ConnectToMongo = require('./db')

const app = express()
const port = 3000

ConnectToMongo()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})