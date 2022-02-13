const express = require('express')
const colors = require('colors')
const errorHandler = require('./middlewares/errorMiddleware')
const dotenv = require('dotenv').config()

const app = express()

// Body parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/goals', require('./routes/goalRoutes'))

// Error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.cyan))