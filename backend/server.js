// npm package imports express
const express = require('express') // imports express
const dotenv = require('dotenv').config() // import dotenv for using environment variables

const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000 // Set port for express app

const app = express() // Initialise express as app

// Middleware Section
app.use(express.json()) // parse body where JSON
app.use(express.urlencoded({ extended: false })) // parse body where urlEncoded

// add route
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

// Set express app to listen on portfor requests
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
