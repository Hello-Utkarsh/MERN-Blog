const { body } = require('express-validator')
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcryptjs')

router.post('/createuser', [
    body("password").isLength({ min: 5 }).withMessage("Enter a password of min length of 5 numbers"),
    body("email").isEmail().withMessage("Please enter a valid email")
], async (req, res) => {
    try {
        // checking if there exist any other user with same email
        let exist_user = User.findOne({ "email": req.body.email })
        if (!exist_user) {
            res.send("Please use a different email")
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(`${req.body.password}`, salt);

            // creating user
            let user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hash
            })
            res.send("Sucessfully created")
        }
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/login', [
    body("password").isLength({ min: 5 }).withMessage("Enter a password of min length of 5 numbers"),
    body("email").isEmail().withMessage("Please enter a valid email")
], async (req, res) => {
    
})

module.exports = router