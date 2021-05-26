import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    author:{
        type:String,
        default:'Anonymous',
        require:true
    },
    authorImg:{
        type:String,
        default:'null'
    },
    imgPost:{
        type:String,
        default:'null',
        require:true
    },
    likeCount:{
        type:Number,
        default:0,
        require:true
    },
    dislikeCount:{
        type:Number,
        default:0,
        require:true
    },
    shareCount:{
        type:Number,
        default:0,
        require:true
    }
},{timestamps:true})


export const PostModel = mongoose.model('Post',schema)