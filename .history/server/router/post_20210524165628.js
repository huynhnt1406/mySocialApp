import express from 'express'
import { allPosts, createPost, getOnePost, updatePost} from '../controller/posts.controller.js'

const router = express.Router()

router.route('/').get(allPosts)

router.route('/:id').get(getOnePost)
router.route('/add').post(createPost)
router.route('/update/:id').put(updatePost)
export default router