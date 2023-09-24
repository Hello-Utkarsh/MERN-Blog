const express = require('express')
const mongoose = require('mongoose');
// import {body} from 'express-validator'
const app = express()
const User = require('../models/User')
const router = express.Router()

router.get('/createuser', async(req, res) => {
    try {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        user.save()
        .then(res.send(user), console.log(user)).catch(err => console.log(err.message))
    } catch (error) {
        res.send(error.message)
    }
    

  })

module.exports = router