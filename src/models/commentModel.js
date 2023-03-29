const mongoose = require('mongoose')

const commentSchema= new mongoose.Schema({
    'postId': {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    'comment': {
        type: String,
        required: true
    },
    'isReply':{
        type:Boolean,
        default: false
    },
    'commentReplyId': {
        type: String
    }
}, {timestamps: true})

module.exports= mongoose.Model('comment', commentSchema)