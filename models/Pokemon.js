const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pokemonSchema = new Schema ({
    species: {
        type: String,
        required: true
    },
    dexNo: {
        type: Number,
        required: true
    },
    type1: {
        type: String,
        required: true
    },
    type2: String,
    image: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    dexEntry: {
        type: String,
        reqquired: true
    },
    nickName: String,
    level: Number
})

module.exports = mongoose.model('Pokemon', pokemonSchema)