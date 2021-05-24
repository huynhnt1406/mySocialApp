import express from 'express'
import { PostModel } from '../model/PostModel.js'

const router = express.Router()


router.get('/', async (req,res) => {
    try {
        const posts =  await PostModel.find()
        console.log('posts', posts)
        res.status(200).json(posts)
    } catch (err) {
        res.status(400).json({msg:err})
    }

})

export default router