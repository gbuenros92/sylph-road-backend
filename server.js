// ===== IMPORTS =====
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())
app.use(cors())

// ===== ROUTES =====
// Trainers
app.use('/api/v1/trainers', require('./routes/api/trainers'))

// ===== PORT =====
const PORT = 8080
app.listen(PORT, () => console.log(`Express is running on port ${PORT}`))