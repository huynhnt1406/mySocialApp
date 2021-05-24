import express from 'express'
import { allPosts, createPost} from '../controller/posts.controller.js'

const router = express.Router()

router.get('/', allPosts )
router.get('/add', createPost)
export default router