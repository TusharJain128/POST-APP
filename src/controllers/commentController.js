const commentModel = require('../models/commentModel')

exports.commentOnPost = async function(req,res){
    let data = req.body
    let { postId, commentData } = data

    if(!postId){
        return res.status(400).send({status:false, message: "Post Id is not present"})
    }

    if(!commentData){
        return res.status(400).send({status:false, message: "Comment Data is not present"})
    }
    
    let createComment = await commentModel.create(data)

    res.status(201).send({status:true, message:createComment})
}

exports.replyOnComment = async function(req,res){
    let data = req.body
    let { commentReplyId, commentData } = data

    if(!commentReplyId){
        return res.status(400).send({status:false, message: "Comment id is not present"})
    }

    if(!commentData){
        return res.status(400).send({status:false, message: "Comment Data is not present"})
    }

    data.isReply = true

    let createComment = await commentModel.create(data)

    res.status(201).send({status:true, message:createComment})
}