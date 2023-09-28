const express = require('express')
const app = express()
const router = express.Router()

// FETCH ALL BLOGS
router.get('/fetchblogs', async (req, res) => {
  res.send("Get Goals")
})

// CREATE BLOG
router.post('/createblog', async (req, res) => {
  res.send("Create Goals")
})

// UPDATE BLOG
router.put('/updateblog:id', async (req, res) => {
  res.send("Update Goals")
})

// DELETE BLOG
router.delete('/deleteblog:id', async (req, res) => {
  res.send("Delete Goals")
})

module.exports = router