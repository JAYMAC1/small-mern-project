// import express
const express = require('express')

// import dotenv for using environment variables
const dotenv = require('dotenv').config()

// Set port for express app
const PORT = process.env.PORT || 5000

// Initialise express as app
const app = express()

// Set express app to listen on portfor requests
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
