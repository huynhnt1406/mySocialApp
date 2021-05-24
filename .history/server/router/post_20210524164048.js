import express from 'express'
import { allPosts, createPost, updatePost} from '../controller/posts.controller.js'

const router = express.Router()

router.get('/', allPosts )
router.get('/add', createPost)
router.get('/update', updatePost)
export default router