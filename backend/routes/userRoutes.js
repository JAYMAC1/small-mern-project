// First bring in express to be able to use express router
// require('express') is common js syntax unlike 'import <> from'
const express = require('express')

// create instance of express.Router()
const router = express.Router()

// import contoller functions
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

// export router
module.exports = router
