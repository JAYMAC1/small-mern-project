// import express-async-handler
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// import user model
const User = require('../models/userModel')

// @desc    controller create user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({
    message: 'Registered User',
  })
}

// @desc    Authenicate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({
    message: 'Logged In User',
  })
}

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = (req, res) => {
  res.json({
    message: 'My User Info',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
