import { PostModel } from "../model/PostModel.js"

export const allPosts = async ( req ,res) => {
    try {
        const posts =  await PostModel.find()
        console.log('posts', posts)
        res.status(200).json(posts)
    } catch (err) {
        res.status(400).json({msg:'Server Error'})
    }

}