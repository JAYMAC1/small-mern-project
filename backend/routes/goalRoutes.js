// First bring in express to be able to use express router
// require('express') is common js syntax unlike 'import <> from'
const express = require('express')

// create instance of express.Router()
const router = express.Router()

// create route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'This GETS a list of goals' })
})

router.get('/', (req, res) => {
  res.status(200).json({ message: 'This GETS a list of goals' })
})

router.get('/', (req, res) => {
  res.status(200).json({ message: 'This GETS a list of goals' })
})

router.get('/', (req, res) => {
  res.status(200).json({ message: 'This GETS a list of goals' })
})

// export router
module.exports = router
