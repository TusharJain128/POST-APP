const mongoose = require('mongoose')

const commentSchema= new mongoose.Schema({
    'postId': {
        type: String
    },
    'commentData': {
        type: String,
        required: true
    },
    'isReply':{
        type:Boolean,
        default: false
    },
    'commentReplyId': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
}, {timestamps: true})

module.exports= mongoose.model('Comment', commentSchema)