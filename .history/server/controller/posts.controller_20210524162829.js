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
export const getOnePost = async ( req ,res) => {
    try {
        PostModel.findById(req.params._id , function(err,post){
            if(err){
                res.status(400).json({msg:'Not found Data'})
            }
            else{
                res.status(200).json(post)
            }
        })
        
    } catch (err) {
        res.status(400).json({msg:'Server Error'})
    }

}

export const createPost = async (req,res) => {
    try {
        const newPost = req.body
        const post = await PostModel(newPost)
        post.save()
        console.log('post',post)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({msg:'Server Error'})
    }
}