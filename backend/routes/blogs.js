const express = require('express')
const app = express()

app.get('/fetchblogs', async(req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.send(error);
  }
  })