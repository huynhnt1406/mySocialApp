import mongoose from 'mongoose'


const schema = new mongoose.Schema({
    userAvatar: {
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    dateOfBirth:{
        type:String,
        require:true
    },
    currentAdress:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    fullname: {
        type:String,
        require:true
    }
})

export const UserModel = mongoose.model('User',schema)