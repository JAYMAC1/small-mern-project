// import express-async-handler
const asyncHandler = require('express-async-handler')

// import models
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc    controller to fetch goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })
  res.status(200).json(goals)
})

// @desc    controller to add goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })
  res.status(200).json(goal)
})

// @desc    controller to update goal based on id
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not Found')
  }
  const user = await User.findById(req.user.id)

  // Check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Check if user is valid to update goal
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('Not Authorised!')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedGoal)
})

// @desc    controller to delete goal based on id
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not Found')
  }

  const user = await User.findById(req.user.id)

  // Check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Check if user is valid to update goal
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('Not Authorised!')
  }

  await goal.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
