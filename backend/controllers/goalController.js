const { response } = require("express")
const { request } = require("express")
const asyncHandler = require("express-async-handler")

const Goal = require('../models/goalModel')
const User = require("../models/userModel")


/**
 * @description Get Goals
 * @route GET /api/goals
 * @access Private
 *
 * @param {request} req 
 * @param {response} res 
 * @returns {response}
 */
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    return res.status(200).json(goals)
})

/**
 * @description Set Goal
 * @route POST /api/goals
 * @access Private
 *
 * @param {request} req 
 * @param {response} res 
 * @returns {response}
 */
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    return res.status(201).json(goal)
})

/**
 * @description Update Goal
 * @route PUT /api/goals/:id
 * @access Private
 *
 * @param {request} req 
 * @param {response} res 
 * @returns {response}
 */
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sur the logged in user matches the one that created the current goal
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(200).json(updatedGoal)
})

/**
 * @description Delete a Goal
 * @route DELETE /api/goals/:id
 * @access Private
 *
 * @param {request} req 
 * @param {response} res 
 * @returns {response}
 */
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    
    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sur the logged in user matches the one that created the current goal
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    goal.remove()

    return res.status(200).json({ id: req.params.id })
})


module.exports = {
    deleteGoal,
    getGoals,
    setGoal,
    updateGoal,
}


