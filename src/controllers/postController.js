const commentModel = require('../models/commentModel')
const postModel = require('../models/postModel')

exports.createPost = async function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')

    let data= req.body
    let { userId, post} = data

    if(!userId){
        return res.status(400).send({status:false, message:"userId is missing"})
    }

    if(!post){
        return res.status(400).send({status:false, message:"post is missing"})
    }
    let createPost = await postModel.create(data)
    return res.status(201).send({status:true, message: createPost})
    
}

exports.getPost = async function (req, res){

    res.setHeader('Access-Control-Allow-Origin', '*')

    let postData = await postModel.find()

    res.status(200).send({status:true, message:postData})
}

exports.getPostById = async function(req,res){

    res.setHeader('Access-Control-Allow-Origin', '*')

    let postId = req.params.postId

    let comments = await commentModel.find({postId: postId})// .populate("commentReplyId")

    let postData = await postModel.findById(postId)

    postData = postData.toObject()
    postData.comment = comments
    res.status(200).send({status:true, message: postData})
}

