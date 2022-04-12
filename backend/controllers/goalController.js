// @desc    controller to fetch goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'GET goals' })
}

// @desc    controller to add goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'set goals' })
}

// @desc    controller to update goal based on id
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal id: ${req.params.id}` })
}

// @desc    controller to delete goal based on id
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `deleting goal id: ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
