const express = require('express')
const app = express()

app.get('/fetchblogs', (req, res) => {
    res.send('Hello World!')
  })