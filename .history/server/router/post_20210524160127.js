import express from 'express'
import { allPosts, getOnePost } from '../controller/posts.controller.js'
import { PostModel } from '../model/PostModel.js'

const router = express.Router()


router.get('/', allPosts )
router.get('/:id', getOnePost )
export default router