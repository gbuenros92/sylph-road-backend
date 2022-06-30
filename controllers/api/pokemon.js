const Pokemon = require('../../models/Pokemon')

const create = async (req, res) => {
    try {
        const createdPkmn = await Pokemon.create(req.body)
        res.status(200).json(createdPkmn)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

const show = async (req, res) => {
    try {
        const foundPkmn = await Pokemon.findById(req.params.id)
        res.status(200).json(foundPkmn)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

const update = async (req, res) => {
    try {
        const updatedPkmn = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedPkmn)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

const release = async (req, res) => {
    try {
        const releasedPkmn = await Pokemon.findByIdAndDelete(req.params.id)
        res.status(200).json(releasedPkmn)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

module.exports = {
    create,
    show,
    update,
    release
}