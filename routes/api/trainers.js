const express = require('express')
const router = express.Router()
const trainersCtrl = require('../../controllers/api/trainers')

// POST /api/v1/trainers
router.post('/', trainersCtrl.create)

module.exports = router