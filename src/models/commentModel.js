const mongoose = require('mongoose')

const commentSchema= new mongoose.Schema({
    'postId': {
        type: mongoose.Schema.Types.ObjectId
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
        type: mongoose.Schema.Types.ObjectId
    }
}, {timestamps: true})

module.exports= mongoose.model('Comment', commentSchema)