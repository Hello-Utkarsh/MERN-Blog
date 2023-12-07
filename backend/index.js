const express = require('express')
const ConnectToMongo = require('./db')
const cors = require('cors')
const app = express()
// const expressValidator = require('express-validator')
const port = 3000

ConnectToMongo()
app.use(cors())
app.use(express.json())
// app.use(expressValidator())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth', require('./routes/user'))
app.use('/notes', require('./routes/blogs'))
app.use('/notes/comments', require('./routes/comment'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})