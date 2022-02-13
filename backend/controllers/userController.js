const bcrypt = require('bcrypt')
const { response, request } = require("express")
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

/**
 * @description Authenticate a user
 * @route POST /api/users/login
 * @access Public
 * @param {request} req 
 * @param {response} res 
 */
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // Check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {

        return res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }

    res.status(401)
    throw new Error('Invalid credentials')
})

/**
 * @description Register a new user
 * @route POST /api/users/login
 * @access Public
 * @param {request} req 
 * @param {response} res 
 */
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, dateOfBirth, role } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        dateOfBirth,
        role,
    })

    if (user) {
        return res.status(201)
            .jsonp({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            })
    }

    res.status(400)
    throw new Error('Invalid user data')
})

/**
 * @description Get user data
 * @route GET /api/users/me
 * @access Private
 * @param {request} req 
 * @param {response} res 
 */
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

/**
 * Generate JWT
 * @param {string} id 
 * @returns {string}
 */
const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    getMe,
    loginUser,
    registerUser,
}