const express = require('express')
const router = express.Router()
const pkmnCtrl = require('../../controllers/api/pokemon')

// POST /api/v1/pokemon/
router.post('/', pkmnCtrl.create)

// GET /api/v1/pokemon/:id
router.get('/:id', pkmnCtrl.show)

// PUT /api/v1/pokemon/:id
router.put('/:id', pkmnCtrl.update)

// DELETE /api/v1/pokemon/:id
router.delete('/:id', pkmnCtrl.release)

module.exports = router