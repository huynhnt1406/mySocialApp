import { VideoModel } from "../model/VideoModel.js"


export const allVideos = async (req,res) => {
    try {
        const videos = await VideoModel.find()
        console.log('videos',videos)
        res.status(200).json(videos)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}
export const uploadVideo = async (req,res) => {
    try {
        const newVideo = req.body
        const video = new VideoModel(newVideo)
        await video.save()
        console.log('video has been created', video)
        res.status(200).json(video)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}