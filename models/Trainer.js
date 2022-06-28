const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const trainerSchema = new Schema ({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 5,
        maxLength: 255,
        required: true
    },
    trainerName: String,
    trainerHandle: {
        type: String,
        default: `@trainer${Date.now()}`,
        trim: true,
        unique: true,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    party: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pokemon'
        }
    ],
    picture: String,
    isLeader: {
        type: Boolean,
        default: false,
        required: true
    },
    isElite: {
        type: Boolean,
        default: false,
        required: true
    },
    isChamp: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password
            return ret
        }
    }
})

trainerSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, saltRounds)
    return next()
})

module.exports = mongoose.model('Trainer', trainerSchema)