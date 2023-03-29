const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    "userId": {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    "post": {
        type: String,
        required: true
    },
    "commentId": {
        type: mongoose.Schema.Types.ObjectId
    }
}, {timestamps: true})

module.exports = mongoose.Model('post', postSchema)