import express from 'express'
import { allVideos, uploadVideo } from '../controller/videos.controller.js'



const router =  express.Router()


router.route('/').get(allVideos)
router.route('/upload').post(uploadVideo)


export default router