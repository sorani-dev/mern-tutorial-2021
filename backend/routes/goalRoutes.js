const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController.js')
const { protect } = require('../middlewares/authMiddleware.js')

const router = require('express').Router()

router.route('/').get(protect, getGoals).post(protect, setGoal)

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router