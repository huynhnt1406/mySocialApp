import { HouseModel } from "../../model/HouseModel.js"


export const getAll = async (req,res) => {
    try {
        const household = await HouseModel.find()
        console.log('household products', household)
        res.status(200).json(household)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}


export const getOne = async (req,res) => {
    try {
        const tool = await HouseModel.findById(req.params.id)
        console.log('this is a product', tool)
        res.status(200).json(tool)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const upOne = async (req,res) => {
    try {
        const newHousehold = req.body
        const household = new HouseModel(newHousehold)
        await household.save()
        console.log('a product  is uploaded successfully', household)
        res.status(200).json(household)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const updateOne = async (req,res) => {
    try {
        const updateHousehold = req.body
        const tool  = await HouseModel.findByIdAndUpdate(req.params.id, updateHousehold,{new:true})
        console.log('this is a tool is updated', tool)
        res.status(200).json(tool)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const delOne = async (req,res) => {
    try {
        const tool = await HouseModel.findByIdAndDelete(req.params.id)
        console.log('a tool is deleted successfully', tool)
        res.status(200).json(tool)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}