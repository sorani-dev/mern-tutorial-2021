const { response } = require("express")
const { request } = require("express")
const asyncHandler = require("express-async-handler")

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
    return res.status(200).json({ message: 'Get Goals' })
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
    return res.status(201).json({ message: 'Set Goal' })
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
    return res.status(200).json({ message: `Update Goal ${req.params.id}` })
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
    return res.status(200).json({ message: `Delete Goal ${req.params.id}` })
})


module.exports = {
    deleteGoal,
    getGoals,
    setGoal,
    updateGoal,
}


