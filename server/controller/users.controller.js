import { UserModel } from "../model/UserModel.js"




export const getAllUsers = async (req,res) =>{
    try {
        const users = await UserModel.find()
        console.log('this is all users', users)
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const getOneUser = async (req,res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        console.log('this is user detail' ,user)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({msg:'Bad Request'})
    }
}
export const createUser = async (req,res) => {
    try {
        const newUser =  req.body
        const user = new UserModel(newUser)
        await user.save()
        console.log('user has created ',user)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).send({msg:'Bad request'})
    }
}
export const deleteUser = async (req,res) => {
    try {
        const users = await UserModel.findByIdAndDelete(req.params.id)
        console.log('updated user list completed',users)
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({msg:'Bad Request'})
    }
}

export const updateUser = async (req,res) => {
    try {
        const updateUser = req.body
        const user = await UserModel.findByIdAndUpdate(req.params.id, updateUser, {new:true})
        console.log('user updated successfully',user)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg:'Server Error'})
    }
}