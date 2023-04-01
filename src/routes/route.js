const express = require('express')
const router = express.Router()
const {loginUser} = require('../controllers/userController')
const {createPost, getPost, getPostById} = require('../controllers/postController')
const {commentOnPost, replyOnComment} = require('../controllers/commentController')

router.get('/test', (req,res)=>{
    res.send("api is working fine")
})

router.post('/loginUser', loginUser)
router.post('/createPost', createPost)
router.get('/getPost', getPost)
router.get('/getPost/:postId', getPostById)
router.post('/commentOnPost', commentOnPost)
router.post('/replyOnComment',replyOnComment)

module.exports= router