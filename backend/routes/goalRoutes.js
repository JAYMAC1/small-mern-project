// First bring in express to be able to use express router
// require('express') is common js syntax unlike 'import <> from'
const express = require('express')

// create instance of express.Router()
const router = express.Router()

// GET goals
router.get('/', (req, res) => {
  res.status(200).json({ message: 'GET goals' })
})

// POST goals
router.post('/', (req, res) => {
  res.status(200).json({ message: 'Set goal' })
})

// PUT goal with ID
router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update goal id: ${req.params.id}` })
})

// DELETE goal with ID
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `deleting goal id: ${req.params.id}` })
})

// export router
module.exports = router
