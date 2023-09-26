const { body } = require('express-validator')
const express = require('express')
const mongoose = require('mongoose');
// import {body} from 'express-validator'
const app = express()
const User = require('../models/User')
const router = express.Router()

router.post('/createuser',[
    body("password").isLength({min: 5}).withMessage("Enter a password of min length of 5 numbers"),
    body("email").isEmail().withMessage("Please enter a valid email")
], async(req, res) => {
    try {
        let exist_user = User.findOne({"email": req.body.email})
        if(!exist_user){
            console.log("exist")
            let user = User.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    })
                    .then(res.send(user)).catch(err => res.send(err.message))
        }
        else{
            res.send("Please use a different email")
        }    
    } catch (error) {
        res.send(error.message)
    }
    

  })

module.exports = router