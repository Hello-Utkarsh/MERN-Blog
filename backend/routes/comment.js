const express = require('express')
const app = express()
const router = express.Router()
const Blogs = require('../models/Blogs')
const fetchuser = require('../middleware/fetchuser')
const jwt = require('jsonwebtoken')
const Comment = require('../models/Comment')

// FETCH ALL COMMENTS
router.get('/fetchcomments/:id', fetchuser, async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(404).send("Please provide blog id")
    }
    let all_post_comment = await Comment.find({
      post_id: req.params.id,
    });
    
    if (all_post_comment.length == 0) {
      return res.status(404).json({error: "You do not have any comment"});
    }

    return res.send(all_post_comment)


  } catch (error) {
    res.send(error.message);
  }
})

// DELETE ALL COMMENTS OF A BLOG
router.delete('/deleteallcomments/:id', fetchuser, async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(404).send("Please provide blog id")
    }
    let blog = await Blogs.find({
      _id: req.params.id,
    });
    
    if (!blog) {
      return res.status(404).json({error: "Blog not found"});
    }

    const comments = await Comment.deleteMany({post_id: req.params.id})
    return res.status(200).json({comments})


  } catch (error) {
    res.send(error.message);
  }
})

// CREATE COMMENT
router.post(`/postcomment/:id`, fetchuser, async (req, res) => {

  try {
    let user_data = jwt.verify(req.headers["auth-token"], process.env.VITE_JWT_SECRET)
    let user = user_data.user.name
    let user_id = user_data.user.id
    let comment_discription = req.body.discription
    if (!comment_discription) {
      return res.status(404).json("Please enter something")
    }

    // CREATING THE BLOG
    let comment = new Comment({
      post_id: req.params.id,
      user: user,
      user_id: user_id,
      discription: comment_discription,
    })

    // SAVING THE COMMENT
    comment.save()
    res.send(comment)


  } catch (error) {
    res.send(error.message);
  }


})

// UPDATE BLOG
router.put('/updatecomment/:id', fetchuser, async (req, res) => {
  try {
    const { discription } = req.body
    let newcomment = {
      discription: undefined,
    }

    if (!discription) {
      return res.send("Please enter something")
    }
    newcomment.discription = discription

    let comment = await Comment.findById(req.params.id)

    // {newblog.user, newblog.id} = {blog.user, blog.id}

    if (!comment) {
      return res.send("Not Found")
    }

    // if (comment.user.toString() !== req.user.id) {
    //   res.send("Unauthorized")
    // }

    comment = await Comment.findByIdAndUpdate(req.params.id, { $set: newcomment }, { new: true })
    console.log(newcomment)

    return res.send(comment)

  } catch (error) {
    return res.send(error.message)
  }
})

// // DELETE BLOG
router.delete('/deletecomment/:id', fetchuser, async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(404).send("Please provide comment id")
    }
    let comment = await Comment.findById(req.params.id)

  if (!comment) {
    return res.status(404).send("Not Found")
  }


  if (comment.user_id.toString() !== req.user.id) {
    return res.send("Unauthorized")
  }

  comment = await Comment.deleteOne({ _id: req.params.id })
  return res.send("Successfully Deleted")

  } catch (error) {
    return res.send(error)
  }

  

})

module.exports = router