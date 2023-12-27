const { body } = require('express-validator')
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

router.post('/createuser', [
    body("password").isLength({ min: 5 }).withMessage("Enter a password of min length of 5 numbers"),
    body("email").isEmail().withMessage("Please enter a valid email")
], async (req, res) => {
    try {
        // checking if there exist any other user with same email
        let exist_user = User.findOne({ "email": req.body.email })
        if (!exist_user) {
            return res.send("Please use a different email")
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
            const data = {
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            }
            const authtoken = jwt.sign(data, process.env.VITE_JWT_SECRET);
            return res.send({ "success": "Successfully created", authtoken })
        }
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/fetchuser', fetchuser, async (req, res) => {
    try {
        // console.log(req.headers.token)
        let user_data = jwt.verify(req.headers["auth-token"], process.env.VITE_JWT_SECRET)
        return res.send({ user_data })
    } catch (error) {
        return res.send(error.message)
    }
})

router.post('/login', [
    body("password").isLength({ min: 5 }).withMessage("Enter a password of min length of 5 numbers"),
    body("email").isEmail().withMessage("Please enter a valid email")
], async (req, res) => {
    try {
        // CHECKING IF THE USER EXISTS WITH THE GIVEN EMAIL
        const user = await User.findOne({ "email": req.body.email })

        // IF DOES NOT EXIST
        if (!user) {
            return res.status(404).json({message: "Incorrect email or password"})
        }

        // IF EXIST THEN CHECKING THE PASSWORD
        const auth = await bcrypt.compare(req.body.password, user.password)
        if (!auth) {
            return res.send("Incorrect email or password")
        }
        const data = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        }
        const authtoken = jwt.sign(data, process.env.VITE_JWT_SECRET);

        // LOGGED IN
        return res.status(200).json({ message: "User logged in successfully", authtoken });
    } catch (error) {
        return res.json(error.message);
    }


})

router.get('/verify', fetchuser, async (req, res) => {
    try {
        let user_data = jwt.verify(req.headers['auth-token'], process.env.VITE_JWT_SECRET)
        if (user_data.user.id == req.headers.blog_user) {
            return res.json({message: "Verified"})
        }
        return res.send({message: "Unauthorized"})
    } catch (error) {
        return res.json(error.message)
    }
})

module.exports = router