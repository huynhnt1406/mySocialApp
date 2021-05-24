import { PostModel } from "../model/PostModel.js"
//oke get all posts
export const allPosts = async ( req ,res) => {
    try {
        const posts =  await PostModel.find()
        console.log('posts', posts)
        res.status(200).json(posts)
    } catch (err) {
        res.status(400).json({msg:'Server Error'})
    }

}
//oke get one post
export const getOnePost = async ( req ,res) => {
    try {
        const post = await PostModel.findById(req.params.id)
        console.log('post',post)
        res.status(200).json(post)
        
    } catch (err) {
        res.status(400).json({msg:'Server Error'})
    }

}
//oke create a post
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

//edited update a post
export const updatePost = async (req,res) => {
    try {
        const updatePost = req.body
        const post = await PostModel.findByIdAndUpdate(req.params.id, updatePost, {new:true})
        console.log('post',post)
        res.status(200).json({msg:'updated successfully'})
    } catch (error) {
        res.status(400).json({msg:'Server Error'})
    }
}

// deleted post

export const deletePost = async (req,res) => {
    try {
        const posts = await PostModel.findByIdAndDelete(req.params.id)
        console.log('posts',posts)
        res.status(200).json({msg:'delete successfully'})
    } catch (error) {
        res.status(400).json({msg:'Server Error'})
    }
}
// DONE CREATE - WATCH(1 AND ALL) - UPDATE - DELETE 
//PROGRESS SUCCESSFULLY 

