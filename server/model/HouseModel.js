import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    productImg:{
        type:String,
        require:true
    },
    productImgChild:{
        type:Array,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    rating:{
        type:Buffer,
        require:true,
        defailt:0
    },
    price:{
        type:String,
        require:true
    }
})

export const HouseModel = mongoose.model('House', schema)