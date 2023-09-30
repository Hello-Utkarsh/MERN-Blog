const express = require('express')
const app = express()
const router = express.Router()
const Blogs = require('../models/Blogs')
const fetchuser = require('../middleware/fetchuser')
const jwt = require('jsonwebtoken')

// FETCH ALL BLOGS
router.get('/fetchblogs', async (req, res) => {
  res.send("Get Goals")
})

// CREATE BLOG
router.post('/createblog', fetchuser, async (req, res) => {

  try {

    // CHECKING IF SIMILAR NOTE EXIST OR NOT
    let exist_title = await Blogs.findOne({ title: req.body.title });
    let exist_description = await Blogs.findOne({
      description: req.body.description,
    });
    if (exist_description || exist_title) {
      return res.json({
        error: "A note with similar data was found. Please add a new note",
      });
    }

    // CREATING THE BLOG
    let blog = new Blogs({
      user: req.user.id,
      title: req.body.title,
      discription: req.body.discription,
      tag: req.body.tag
    })

    // SAVING THE BLOG
    blog.save()
    res.send(blog)


  } catch (error) {
    res.send(error.message);
  }


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