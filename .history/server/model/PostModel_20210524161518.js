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
    updateAt: {
       require:true,
       type:String
    }
},{timestamps:true})


export const PostModel = mongoose.model('Post',schema)