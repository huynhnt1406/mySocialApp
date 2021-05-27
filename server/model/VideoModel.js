import mongoose from 'mongoose'


const schema  = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    authorUrl:{
        type:String,
        require:true
    },
    authorName:{
        type:String,
        require:true,
        default:'Anonymous'
    },
    videoUrl:{
        type:String,
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
    },
    views:{
        type:Number,
        default:0,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

export const VideoModel = mongoose.model('Videos', schema)