const express = require('express')
const router = express.Router()
const trainersCtrl = require('../../controllers/api/trainers')

// POST /api/v1/trainers/signup (Create user)
router.post('/signup', trainersCtrl.create)

// POST /api/v1/login
router.post('/login', trainersCtrl.login)

// GET /api/v1/trainers/:id (Trainer profile)
router.get('/:id', trainersCtrl.show)

module.exports = router