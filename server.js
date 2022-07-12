// ===== IMPORTS =====
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())
app.use(cors())
app.use(require('./config/checkToken'))

// ===== ROUTES =====
// Trainers
app.use('/api/v1/trainers', require('./routes/api/trainers'))

// Pokemon
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use('/api/v1/pokemon', ensureLoggedIn, require('./routes/api/pokemon'))

// ===== PORT =====
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Express is running on port ${PORT}`))