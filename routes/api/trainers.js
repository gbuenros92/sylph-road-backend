const express = require('express')
const router = express.Router()
const trainersCtrl = require('../../controllers/api/trainers')

// POST /api/v1/trainers/signup (Create user)
router.post('/signup', trainersCtrl.create)

// POST /api/v1/login
router.post('/login', trainersCtrl.login)

module.exports = router