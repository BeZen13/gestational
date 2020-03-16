const mongoose = require('mongoose')
const Schema = mongoose.Schema


const numbersSchema = new Schema({
    aonec: {
        type: Number,
        required: true
    },
    glucose: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    systolic:{
        type: Number,
        required: true
    },
    diastolic: {
        type: Number,
        required: true
    },
    calories:{
        type: Number,
        required: true
    },
    insulin:{
        type: Date,
        required: Date.now
    },
    dateEntered: {
        type: Date,
        defualt: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Numbers", numbersSchema)