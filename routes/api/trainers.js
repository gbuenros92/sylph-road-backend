const express = require('express')
const router = express.Router()
const trainersCtrl = require('../../controllers/api/trainers')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/v1/trainers/signup (Create user)
router.post('/signup', trainersCtrl.create)

// POST /api/v1/login
router.post('/login', trainersCtrl.login)

// === Protected from unauthorized users ===
// GET /api/v1/trainers/:id (Trainer profile)
router.get('/:id', ensureLoggedIn, trainersCtrl.show)

// PUT /api/v1/trainers/:id (Update profile)
router.put('/:id', ensureLoggedIn, trainersCtrl.update)

// DELETE  /api/v1/trainers/:id (Delete account)
router.delete('/:id', ensureLoggedIn, trainersCtrl.remove)

module.exports = router