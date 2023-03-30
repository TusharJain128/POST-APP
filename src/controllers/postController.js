const postModel = require('../models/postModel')

exports.createPost = async function(req,res){
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

    let userId = req.params.userId

    let postData = await postModel.find({userId: userId})

    res.status(200).send({status:true, message:postData})
}

