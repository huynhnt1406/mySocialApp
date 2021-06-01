import { ItemsModel } from "../../model/ItemsModel.js"


export const getAll = async (req,res) => {
    try {
        const items = await ItemsModel.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const delOne = async (req,res) => {
    try {
        const items = await ItemsModel.findByIdAndDelete(req.params.id)
        res.status(200).json(items)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}
export const addOne = async (req,res) => {
    try {
        const newItem = req.body
        const item = new ItemsModel(newItem)
        await item.save()
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}
