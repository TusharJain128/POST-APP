const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    "userId": {
        type: String,
        required: true
    },
    "post": {
        type: String,
        required: true
    },
    "commentId": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment', 
        default: null
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)