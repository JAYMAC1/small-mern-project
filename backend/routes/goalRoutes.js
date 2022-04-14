// First bring in express to be able to use express router
// require('express') is common js syntax unlike 'import <> from'
const express = require('express')

// create instance of express.Router()
const router = express.Router()

// import contoller functions
const {
  getGoals,
  setGoal,
  deleteGoal,
  updateGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

// GET goals || POST goal
router.route('/').get(protect, getGoals).post(protect, setGoal)

// PUT goal with ID || DELETE goal with ID
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

// export router
module.exports = router
