const mongoose = require('mongoose')
const Schema = mongoose.Schema


const numbersSchema = new Schema({
    aonec: {
        type: Number,
        required: false
    },
    glucose: {
        type: Number,
        required: false
    },
    carbs: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    systolic:{
        type: Number,
        required: false
    },
    diastolic: {
        type: Number,
        required: false
    },
    calories:{
        type: Number,
        required: false
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