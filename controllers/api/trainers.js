const Trainer = require('../../models/Trainer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Create Trainer
const create = async (req, res) => {
    try {
        const createdTrainer = await Trainer.create(req.body)
        res.status(200).json(createdTrainer)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    create
}