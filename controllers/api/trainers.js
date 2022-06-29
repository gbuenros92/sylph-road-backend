const Trainer = require('../../models/Trainer')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

// Create Trainer Profile
const create = async (req, res) => {
    try {
        const createdTrainer = await Trainer.create(req.body)
        res.status(200).json(createdTrainer)
    } catch (e) {
        console.log(e)
    }
}

// Log In
const login = async (req, res) => {
    try {

        const trainer = await Trainer.findOne({
            email: req.body.email
        })
        if(!trainer) throw new Error()

        const match  = await bcrypt.compare(req.body.password, trainer.password)
        if(!match) throw new Error()

        res.status(200).json(createJWT(trainer))
        
    } catch (e) {
        res.status(401).json({
            msg: e.message,
            reason: "Bad Credentials"
        })
    }
}

// Find a trainer
const show = async (req, res) => {
    try {
        const foundTrainer = await Trainer.findById(req.params.id)
        res.status(200).json(foundTrainer)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

// Update trainer
const update = async (req, res) => {
    try {

        req.body.password = await bcrypt.hash(req.body.password, saltRounds)
        const updatedTrainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedTrainer)
        
    } catch (e) {
        res.status(400).json({ msg: e.messge })
    }
}


const createJWT = trainer => {
    return jwt.sign(
        { trainer },
        process.env.SECRET,
        { expiresIn: '48h' }
    )
}

module.exports = {
    create,
    login,
    show,
    update
}