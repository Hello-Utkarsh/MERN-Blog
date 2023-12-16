const express = require('express')
const app = express()
const router = express.Router()
const Blogs = require('../models/Blogs')
const fetchuser = require('../middleware/fetchuser')
const jwt = require('jsonwebtoken')

// FETCH ALL BLOGS
router.get('/fetchblogs', fetchuser, async (req, res) => {
  try {
    // CHECKING IF NOTE EXIST OR NOT
    let all_user_note = await Blogs.find({
      user: req.user.id,
    });

    if (!all_user_note) {
      return res.json({
        error: "You do not have any note",
      });
    }

    res.send(all_user_note)


  } catch (error) {
    res.send(error.message);
  }
})

// CREATE BLOG
router.post('/createblog', fetchuser, async (req, res) => {

  try {
    // CHECKING IF SIMILAR NOTE EXIST OR NOT
    let exist_title = await Blogs.findOne({ title: req.body.title });
    let exist_description = await Blogs.findOne({
      discription: req.body.description,
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
router.put('/updateblog/:id', fetchuser, async (req, res) => {
  try {
    const { title, discription, tag } = req.body
    let newblog = {
      title: undefined,
      discription: undefined,
      tag: undefined,
    }

    if (title) {
      newblog.title = title
    }

    if (discription) {
      newblog.discription = discription
    }

    if (tag) {
      newblog.tag = tag
    }

    let blog = await Blogs.findById(req.params.id)

    // {newblog.user, newblog.id} = {blog.user, blog.id}

    if (!blog) {
      return res.send("Not Found")
    }

    if (blog.user.toString() !== req.user.id) {
      return res.send("Unauthorized")
    }

    blog = await Blogs.findByIdAndUpdate(req.params.id, { $set: newblog }, { new: true })

    return res.send(blog)

  } catch (error) {
    return res.send(error.message)
  }
})

// DELETE BLOG
router.delete('/deleteblog/:id', fetchuser, async (req, res) => {

  let blog = await Blogs.findById(req.params.id)

  if (!blog) {
    return res.json({error: "Not Found"})
  }


  if (blog.user.toString() !== req.user.id) {
    return res.send("Unauthorized")
  }

  blog = await Blogs.deleteOne({ _id: req.params.id })
  return res.send("Successfully Deleted")

})

module.exports = router