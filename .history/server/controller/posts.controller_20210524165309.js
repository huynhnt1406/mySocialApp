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
export const createPost = async (req,res) => {
    try {
        const newPost = req.body
        const post = new PostModel(newPost)
        await post.save()
        console.log('post',post)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({msg:'Server Error'})
    }
}
export const updatePost = async (req,res) => {
    try {
        const updatePost = req.body
        const post = await PostModel.findOneAndUpdate({_id : updatePost._id }, updatePost, {new:true})
        console.log('post',post)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({msg:'Server Error'})
    }
}
