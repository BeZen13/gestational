const mongoose = require('mongoose')
const Schema = mongoose.Schema


const numbersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        require: true
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