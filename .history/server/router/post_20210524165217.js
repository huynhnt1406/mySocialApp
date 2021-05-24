import express from 'express'
import { allPosts, createPost, updatePost} from '../controller/posts.controller.js'

const router = express.Router()

router.route('/').get(allPosts)
router.route('/add').post(createPost)
router.route('/update/:_id').put(updatePost)
export default router