import express from 'express'
import { allPosts } from '../controller/posts.controller.js'
import { PostModel } from '../model/PostModel.js'

const router = express.Router()


router.get('/', allPosts )

export default router