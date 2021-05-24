import express from 'express'
import { allPosts, createPost, getOnePost } from '../controller/posts.controller.js'

const router = express.Router()

router.get('/', allPosts )
router.get('/:id', getOnePost )
router.get('/add', createPost)
export default router