const express = require('express')
const router = express.Router()
const trainersCtrl = require('../../controllers/api/trainers')

// POST /api/v1/trainers/signup (Create user)
router.post('/signup', trainersCtrl.create)

// POST /api/v1/login
router.post('/login', trainersCtrl.login)

// GET /api/v1/trainers/:id (Trainer profile)
router.get('/:id', trainersCtrl.show)

// PUT /api/v1/trainers/:id (Update profile)
router.put('/:id', trainersCtrl.update)

// DELETE  /api/v1/trainers/:id (Delete account)
router.delete('/:id', trainersCtrl.remove)

module.exports = router