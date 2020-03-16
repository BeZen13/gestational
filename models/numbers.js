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
    wight: {
        type: Number,
        required: false
    },
    bloodpressure:{
        type: Number,
        required: false
    },
    calories:{
        type: Number,
        required: false
    },
    insulin:{
        type: Time,
        required: falkse
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