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

// GET goals || POST goal
router.route('/').get(getGoals).post(setGoal)

// PUT goal with ID || DELETE goal with ID
router.route('/:id').put(updateGoal).delete(deleteGoal)

// export router
module.exports = router
