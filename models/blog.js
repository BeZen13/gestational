const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema ({
    postBody: {
        type: String,
        requited: True
    },
    upVote: {
        type: Boolean,
        required: False
    },
    comments: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

modules.export = mongoose.model("Blog", blogSchema)