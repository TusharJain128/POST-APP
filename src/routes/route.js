const express = require('express')
const router = express.Router()
const {loginUser} = require('../controllers/userController')
const {createPost} = require('../controllers/postController')

router.get('/test', (req,res)=>{
    res.send("api is working fine")
})

router.post('/loginUser', loginUser)
router.post('/createPost', createPost)

module.exports= router